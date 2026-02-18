
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

/**
 * analyzeBottleneck: Uses Gemini 3 Pro to analyze business bottlenecks and suggest
 * AI-driven automation strategies with ROI estimates.
 */
export const analyzeBottleneck = async (bottleneck: string): Promise<AnalysisResult> => {
  // Directly initializing with process.env.API_KEY as per system requirements.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Using gemini-3-pro-preview for complex business reasoning and strategic analysis.
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Analyze this business bottleneck and provide a professional AI strategy: "${bottleneck}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            efficiencyGain: {
              type: Type.STRING,
              description: "Estimated hours saved per week or percentage improvement.",
            },
            recommendedSolution: {
              type: Type.STRING,
              description: "A concise 2-sentence AI-driven solution strategy.",
            },
            implementationTime: {
              type: Type.STRING,
              description: "Estimated duration to deploy the solution.",
            },
          },
          required: ["efficiencyGain", "recommendedSolution", "implementationTime"],
        },
        systemInstruction: "You are the Lead AI Consultant at Opound. You provide authoritative, technical, and high-ROI advice. Focus on automation, custom RAG, and agentic workflows.",
      },
    });

    const text = response.text;
    if (!text) throw new Error("API returned an empty response.");

    return JSON.parse(text.trim());
  } catch (error: any) {
    console.error("Gemini Analysis Error:", error);
    
    // Fallback result for graceful failure in case of API quotas or transient errors.
    return {
      efficiencyGain: "10+ Hours / Week",
      recommendedSolution: "We recommend an automated workflow audit to identify specific integration points for custom AI agents.",
      implementationTime: "Custom",
    };
  }
};
