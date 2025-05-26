import axios from 'axios';

const OPENAI_API_KEY = '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'; // your real key

export const getAIReply = async (userInput: string): Promise<string> => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: userInput }
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('🔴 OpenAI API Error:', error);
    return "Sorry, I couldn't understand. Please try again.";
  }
};
