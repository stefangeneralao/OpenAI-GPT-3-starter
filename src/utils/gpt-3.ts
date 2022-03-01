import { Configuration, OpenAIApi } from "openai";
import "dotenv/config";

const { GPT3_ORGANISATION, GPT3_API_KEY } = process.env;

const configuration = new Configuration({
  organization: GPT3_ORGANISATION,
  apiKey: GPT3_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completeSentence = async (prompt: string) => {
  const gptCompletion = await openai.createCompletion("text-davinci-001", {
    prompt,
    max_tokens: 1000,
    echo: true,
  });

  const predictedCompletion = gptCompletion.data.choices[0].text;

  return `${predictedCompletion}`;
};

export { completeSentence };
