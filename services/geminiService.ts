import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 
// Note: In a real production app, ensure the key is present. 
// If missing, the AI features will fail gracefully or return mock data if desired.

const ai = new GoogleGenAI({ apiKey });

export const generateBio = async (name: string, title: string): Promise<string> => {
  if (!name || !title) return '';
  
  try {
    const prompt = `Write a professional, 3-sentence biography summary for ${name}, who holds the title of ${title}. The tone should be formal and suitable for a registry of excellence.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || '';
  } catch (error) {
    console.error("Error generating bio:", error);
    return '';
  }
};

export const generateMissionStatement = async (name: string, type: string): Promise<string> => {
  if (!name || !type) return '';

  try {
    const prompt = `Write a compelling mission and vision statement for a ${type} called "${name}". The tone should be inspiring and professional.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || '';
  } catch (error) {
    console.error("Error generating mission:", error);
    return '';
  }
};