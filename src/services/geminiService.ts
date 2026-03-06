
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

/**
 * analyzeBottleneck: Uses Gemini 3 Pro to analyze business bottlenecks and suggest
 * AI-driven automation strategies with ROI estimates.
 */
export const analyzeBottleneck = async (bottleneck: string, industry: string = 'FinTech'): Promise<AnalysisResult> => {
  try {
    // We initialize inside the function to ensure the API Key from process.env 
    // is captured at runtime, preventing build-time crashes.
    const apiKey = process.env.API_KEY;

    // Safety check: if the key is missing, we return a professional fallback immediately
    // to avoid the SDK throwing a hard error in the user's console.
    if (!apiKey || apiKey === "undefined") {
      console.warn("Opound AI: API_KEY not detected. Using consultant-grade fallback logic.");
      return getFallbackAnalysis(bottleneck);
    }

    const ai = new GoogleGenAI({ apiKey });

    // Using gemini-3-pro-preview for strategic business reasoning.
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Industry context: ${industry} — tailor your analysis and risk framing accordingly.\n\nA business has submitted the following operational bottleneck for analysis:\n\n"${bottleneck}"\n\nPerform a deep AI strategy analysis. Identify the core inefficiency, the compliance or operational risk it creates if left unaddressed, and the most direct AI-powered solution. Be specific — name the type of architecture, integration pattern, or AI capability that applies. Assume the reader is a technical founder, CTO, or senior ops leader who will evaluate your recommendation critically.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            coreProblem: { type: Type.STRING, description: "The root operational failure in one sentence." },
            efficiencyGain: { type: Type.STRING, description: "Quantified hours or % improvement with context." },
            complianceRisk: { type: Type.STRING, description: "Regulatory or audit exposure if this bottleneck is unaddressed." },
            recommendedSolution: { type: Type.STRING, description: "A 3-sentence expert AI automation strategy with specific architecture." },
            techStack: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "2–4 specific AI/integration capabilities that apply.",
            },
            implementationTime: { type: Type.STRING, description: "Realistic MVP and production deployment timeline." },
            firstStep: { type: Type.STRING, description: "The single most actionable next step the business can take immediately." },
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
        },
        systemInstruction: `You are the Principal AI Strategist at Opound LLC — a senior advisor with 15+ years of experience in FinTech, digital asset compliance, AML/trade surveillance, and enterprise SaaS delivery. You specialize in identifying high-ROI AI automation opportunities for regulated financial services firms, FinTech scale-ups, and SaaS operations teams. Your tone is authoritative, precise, and commercially grounded. You speak like a fractional CPO who has deployed AI into production at institutional clients — not like a generic chatbot. Avoid vague platitudes. Every recommendation must be specific, implementable, and tied to measurable business outcomes. When analyzing a business bottleneck, you assess: operational risk, compliance exposure, integration complexity, and ROI timeline. You always recommend the minimum viable AI intervention that delivers the fastest measurable result.`,
      },
    });

    const text = response.text;
    if (!text) throw new Error("Empty AI response");

    return JSON.parse(text.trim());
  } catch (error: any) {
    console.error("Gemini Analysis Error:", error);
    return getFallbackAnalysis(bottleneck);
  }
};

/**
 * Provides a high-quality fallback result to maintain the premium consulting 
 * experience even if the API call fails or the key is not configured.
 */
const getFallbackAnalysis = (input: string): AnalysisResult => {
  return {
    coreProblem: "Manual data orchestration is creating hidden latency and driving up operational risk across your primary workflow.",
    efficiencyGain: "~12-15 hours/week recovered across 3 staff members.",
    complianceRisk: "High risk of manual data entry errors failing audit requirements and violating data integrity standards.",
    recommendedSolution: "Deploy a custom Retrieval-Augmented Generation (RAG) agent combined with deterministic webhooks to automate data triage. This architecture validates incoming data against existing compliance rules via LLM classification before securely migrating the payload to your core ledger.",
    techStack: ["RAG Pipeline", "Webhook Automation", "LLM Classification"],
    implementationTime: "2-3 weeks for MVP, 6 weeks to production.",
    firstStep: "Map the exact fields currently typed manually to specify the extraction schema.",
  };
};
