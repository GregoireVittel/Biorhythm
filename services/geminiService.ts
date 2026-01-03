import { GoogleGenAI } from "@google/genai";
import { BiorhythmState } from '../types';

export const getDailyAdvice = async (state: BiorhythmState): Promise<string> => {
  // Safely check for API key in a way that won't crash in browser environments
  const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : null;

  if (!apiKey) {
    console.warn("API_KEY not found in environment variables.");
    return "API Key not configured. Please add your Gemini API key to use the AI advice feature.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    const prompt = `
      You are a helpful wellness assistant. 
      Interpret the following biorhythm values (range -1.0 to 1.0) for a user today:
      
      Physical: ${state.physical.toFixed(2)}
      Emotional: ${state.emotional.toFixed(2)}
      Intellectual: ${state.intellectual.toFixed(2)}
      
      Provide a short, specific, and encouraging piece of daily advice (max 50 words) based on this combination. 
      For example, if physical is low but intellectual is high, suggest reading or studying instead of heavy exercise.
      Do not mention the raw numbers in the output, just the advice.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text?.trim() || "Stay balanced and listen to your body today.";
  } catch (error) {
    console.error("Error fetching Gemini advice:", error);
    return "Unable to retrieve AI advice at the moment. Trust your intuition!";
  }
};