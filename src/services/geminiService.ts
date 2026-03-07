// src/services/geminiService.ts

import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { AnalysisResult } from "../types";

const API_KEY = (typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.VITE_GEMINI_API_KEY : process.env.VITE_GEMINI_API_KEY) || "";
const genAI = new GoogleGenerativeAI(API_KEY);

// --- Types ---

export type Industry = "fintech" | "healthcare" | "saas" | "general";

// --- Schema ---

const schema = {
  type: SchemaType.OBJECT,
  properties: {
    coreProblem: {
      type: SchemaType.STRING,
      description: "The root operational failure in one sentence — name the actual dysfunction, not a symptom.",
    },
    efficiencyGain: {
      type: SchemaType.STRING,
      description: "Quantified time or cost recovery with staff context. E.g. '~12 hrs/week recovered across 3 analysts' or '$8,400/mo in recoverable labor cost'.",
    },
    complianceRisk: {
      type: SchemaType.STRING,
      description: "The specific regulatory, audit, or operational risk created if this bottleneck is left unaddressed. Name the risk category — e.g. SOC 2, FINRA recordkeeping, MiFID II, HIPAA, audit trail gaps.",
    },
    recommendedSolution: {
      type: SchemaType.STRING,
      description: "3 sentences: what to build, what architecture or integration pattern applies, and what the measurable outcome looks like post-deployment.",
    },
    techStack: {
      type: SchemaType.ARRAY,
      items: { type: SchemaType.STRING },
      description: "2–4 specific AI or integration capabilities that directly apply. Be specific: 'RAG pipeline over compliance docs', not just 'AI'.",
    },
    implementationTime: {
      type: SchemaType.STRING,
      description: "Realistic MVP and production deployment timeline. E.g. '2–3 weeks for MVP, 6–8 weeks to hardened production'.",
    },
    firstStep: {
      type: SchemaType.STRING,
      description: "The single most actionable next step the business can take within the next 5 business days. Make it concrete and specific.",
    },
  },
  required: [
    "coreProblem",
    "efficiencyGain",
    "complianceRisk",
    "recommendedSolution",
    "techStack",
    "implementationTime",
    "firstStep",
  ],
};

// --- Industry context map ---
// Injected into the prompt to force domain-specific reasoning

const industryContext: Record<Industry, string> = {
  fintech: `The firm operates in regulated financial services. Frame compliance risk in terms of 
FINRA, SEC, FCA, FinCEN, MiFID II, SOC 2, or equivalent frameworks depending on the bottleneck 
described. Assume the audience includes a Head of Compliance or CTO who will scrutinize every 
claim. Name specific audit trail, recordkeeping, or surveillance obligations that are at risk. 
Do not give generic "regulatory exposure" language — name the actual rule or framework.`,

  healthcare: `The organization operates in a healthcare or clinical environment. Frame compliance 
risk in terms of HIPAA, PHI handling, audit trail requirements, and CMS documentation standards 
where applicable. Assume a HIPAA Privacy Officer or practice administrator will review this. 
Identify specific PHI exposure, access control gaps, or documentation failures created by the 
bottleneck.`,

  saas: `The company is a SaaS operation. Frame compliance risk in terms of SOC 2 Type II audit 
readiness, data residency, SLA commitments, and customer contractual obligations. Identify 
operational risks such as manual processes that create audit evidence gaps or SLA breach exposure. 
Assume the audience is a VP Engineering or COO evaluating build vs. buy.`,

  general: `Analyze the bottleneck for any industry. Identify the most likely compliance or 
regulatory exposure based on the nature of the workflow described. If the industry is unclear, 
name the risk category generically but be specific about what type of audit or regulatory 
scrutiny would surface this as a finding.`,
};

// --- System instruction ---

const systemInstruction = `You are the Principal AI Strategist at Opound LLC — a senior 
advisor with 15+ years of experience in FinTech, digital asset compliance, AML/trade 
surveillance, and enterprise SaaS delivery. You have personally deployed AI systems 
into production at institutional clients including regulated financial services firms 
and large asset managers.

Your tone is authoritative, precise, and commercially grounded. You speak like a 
fractional CPO, not a chatbot. You never give vague recommendations. Every output 
must be specific, implementable, and tied to measurable outcomes.

Rules you never break:
- Never use the phrase "leverage AI" without specifying what AI capability does what work
- Never say "streamline" or "optimize" without quantifying what gets better
- Never give a compliance risk that is generic — always name the specific framework, 
  rule, or audit category at risk
- Never recommend a tech stack item without explaining why it applies to this specific bottleneck
- The firstStep must be something a senior leader can assign to someone today`;

// --- Main export ---

export async function analyzeBottleneck(
  bottleneck: string,
  industry: Industry = "general"
): Promise<AnalysisResult> {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction,
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: schema as any,
      temperature: 0.4, // Low enough for consistency, high enough for specific recommendations
    },
  });

  const industryBlock = industryContext[industry];

  const prompt = `A business has submitted the following operational bottleneck for analysis:

"${bottleneck}"

Industry context: ${industryBlock}

Perform a structured AI strategy analysis using the following reasoning chain:

STEP 1 — DIAGNOSE: What is the actual root failure here? Not the symptom — the underlying 
operational dysfunction. State it in one precise sentence.

STEP 2 — QUANTIFY: How many hours per week, across how many staff, does this bottleneck 
consume? Estimate conservatively. Express as recovered capacity if automated.

STEP 3 — RISK: Given the industry context above, what specific compliance, audit, or 
operational risk does this create if left unaddressed for 6–12 months? Name the 
framework, rule, or audit category. Be specific.

STEP 4 — SOLVE: What is the minimum viable AI intervention that addresses the root failure 
directly? Name the architecture: RAG pipeline, LLM classification layer, webhook automation, 
structured extraction, vector search, agentic workflow — whatever applies. Explain WHY 
that architecture fits this specific problem.

STEP 5 — STACK: List 2–4 specific AI or integration capabilities needed. Not categories — 
specific capabilities. E.g. "Structured output extraction from unstructured compliance docs" 
not just "NLP".

STEP 6 — TIMELINE: What is a realistic MVP timeline and a hardened production timeline 
for a team with adequate engineering resources?

STEP 7 — FIRST STEP: What is the single most actionable next step this business can take 
within the next 5 business days to begin addressing this? Be specific — name what gets 
audited, built, or decided.`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    try {
      return JSON.parse(text) as AnalysisResult;
    } catch {
      // Fallback: strip markdown fences if model wraps output
      const clean = text.replace(/```json|```/g, "").trim();
      return JSON.parse(clean) as AnalysisResult;
    }
  } catch (error) {
    console.warn("Gemini API call failed, using fallback analysis.", error);
    return getFallbackAnalysis(industry);
  }
}

function getFallbackAnalysis(industry: Industry): AnalysisResult {
  const fallbacks: Record<Industry, AnalysisResult> = {
    fintech: {
      coreProblem: "Manual data aggregation across compliance platforms creates undocumented operational gaps.",
      efficiencyGain: "~18 hours/week recovered",
      complianceRisk: "High risk of FINRA recordkeeping violations due to lack of immutable audit trails on manual reviews.",
      recommendedSolution: "Deploy a secure RAG pipeline over internal compliance policy documents tied directly to alert triage workflows.",
      techStack: ["LLM Classification Layer", "Secure Vector Store", "Structured JSON Extraction"],
      implementationTime: "3-4 weeks for secure MVP",
      firstStep: "Audit the top 3 highest-volume manual compliance workflows tomorrow to map token requirements."
    },
    healthcare: {
      coreProblem: "Staff transcribing patient data introduces delays and high risk of manual entry errors.",
      efficiencyGain: "~22 hours/week recovered",
      complianceRisk: "HIPAA exposure through unsecured spreadsheets and fragmented PHI access logs.",
      recommendedSolution: "Implement an automated secure webhook integration from intake forms directly to the EHR.",
      techStack: ["HIPAA-Compliant Webhooks", "Automated Extraction", "Role-Based Access Logs"],
      implementationTime: "2-3 weeks for MVP",
      firstStep: "Review EHR API documentation to map required payload structures for patient records."
    },
    saas: {
      coreProblem: "Siloed customer data requires manual compilation, delaying retention interventions.",
      efficiencyGain: "~12 hours/week recovered",
      complianceRisk: "SOC 2 Type II audit risk due to manual and undocumented data handling across production systems.",
      recommendedSolution: "Build a structured data pipeline that unifies Stripe, Mixpanel, and Intercom data into a single automated health score.",
      techStack: ["Event-Driven Webhooks", "Data Pipeline Automation", "Structured Analytics Dashboard"],
      implementationTime: "2-4 weeks to production",
      firstStep: "Define the exact formula for a 'healthy' vs 'at-risk' customer based on existing metrics."
    },
    general: {
      coreProblem: "Manual data aggregation across disparate systems creates operational bottlenecks.",
      efficiencyGain: "~10 hours/week recovered",
      complianceRisk: "Potential data stewardship and operational audit risks from undocumented manual processes.",
      recommendedSolution: "Develop an automated extraction and routing pipeline to replace manual copy-paste workflows.",
      techStack: ["LLM Parsing", "API Integrations", "Workflow Automation"],
      implementationTime: "2-4 weeks",
      firstStep: "Map out the exact manual steps of the workflow you just described to identify the clearest API intervention."
    }
  };

  return fallbacks[industry];
}
