import OpenAI from 'openai';

export function getOpenaiClient() OpenAI {
    const client = new OpenAI({
        apiKey: "sk-TSquSI0CdHWZ4xcd37B0A3A7E5494e519eC97eA424965902",
    baseURL: "https://api.openai-next.com/v1"
      });
     
    return openai;
}
