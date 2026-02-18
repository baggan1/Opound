import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

// Always initialize GoogleGenAI with a named parameter using process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeBottleneck = async (bottleneck: string): Promise<AnalysisResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
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
              description: "A concise 2-sentence AI-driven solution.",
            },
            implementationTime: {
              type: Type.STRING,
              description: "Estimated duration to deploy the solution.",
            },
          },
          required: ["efficiencyGain", "recommendedSolution", "implementationTime"],
        },
        systemInstruction: "You are a senior AI business consultant at Opound. Be precise, professional, and focus on practical automation and custom RAG solutions.",
      },
    });

    // Use the .text property directly (do not call it as a method).
    const text = response.text;
    if (!text) {
      throw new Error("Empty response from AI model");
    }

    return JSON.parse(text.trim());
  } catch (error) {
    console.error("AI Analysis failed:", error);
    // Provide a professional fallback response in case of any failures.
    return {
      efficiencyGain: "10+ Hours / Week",
      recommendedSolution: "Our team will design a custom automation workflow integrated with your current tech stack.",
      implementationTime: "2-4 Weeks",
    };
  }
};
