const OpenAI = require('openai');
// const { OpenAIStream, StreamingTextResponse } = require('ai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const runtime = 'edge';

async function POST(req) {
  const { messages } = await req.json();
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}

// Depending on how you plan to use this function, you might need to export it differently
module.exports = {
  POST,
  runtime
};
