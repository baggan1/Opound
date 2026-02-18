
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

export const analyzeBottleneck = async (bottleneck: string): Promise<AnalysisResult> => {
  try {
    // Initialize GoogleGenAI inside the function to prevent top-level crashes during module load.
    // This ensures the site renders even if the environment variable is evaluated later.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
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

    // Extract text directly from the response object
    const text = response.text;
    if (!text) {
      throw new Error("Empty response from AI model");
    }

    return JSON.parse(text.trim());
  } catch (error: any) {
    console.error("AI Analysis failed:", error);
    
    // Help identify if the environment variable is actually missing in Vercel
    if (error?.message?.includes("API Key")) {
      console.error("CONFIGURATION ERROR: process.env.API_KEY is not defined in your environment variables.");
    }

    // Fallback response ensures the UI remains functional and professional even if the API call fails
    return {
      efficiencyGain: "10+ Hours / Week",
      recommendedSolution: "Our team will design a custom automation workflow integrated with your current tech stack.",
      implementationTime: "2-4 Weeks",
    };
  }
};
