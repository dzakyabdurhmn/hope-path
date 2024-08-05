const { createOpenAI } = require("@ai-sdk/openai");
const { generateText } = require("ai");

(async () => {
  const groq = createOpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: "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",
  });

  try {
    const { text } = await generateText({
      model: groq("llama3-8b-8192"),
      prompt: "Write a vegetarian lasagna recipe for 4 people.",
    });
    console.log(text);
  } catch (error) {
    console.error("Error generating text:", error);
  }
})();
