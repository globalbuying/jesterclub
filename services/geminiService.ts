
import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found. Please set the API_KEY environment variable.");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateMatchReport = async (notes: string, sport: string, opponent: string): Promise<string> => {
  try {
    const ai = getClient();
    // Using gemini-3-flash-preview for high-quality, low-latency text generation
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the Honorary Scribe of "The Jesters Club", an elegant and prestigious British sporting club. 
      Write a match report based on the following rough notes.
      
      Sport: ${sport}
      Opponent: ${opponent}
      Notes: ${notes}

      Tone: Aristocratic, slightly humorous, elegant, celebrating the spirit of the game over the result. Use "we" to refer to The Jesters.
      Format: HTML paragraphs (just <p> tags, no markdown blocks).`,
    });

    return response.text || "Alas, the scribe's ink has run dry.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "<p>Alas, the scribe has dropped their quill. (API Error: Please ensure API_KEY is valid in your environment variables).</p>";
  }
};
