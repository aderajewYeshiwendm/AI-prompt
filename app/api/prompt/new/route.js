import Prompt from "@models/prompt";
import { connectDB } from "@utils/database";

export const POST = async (req) => {
  try {
    // Parse the request body
    const { userId, prompt, tag } = await req.json();

    // Validate the required fields
    if (!userId || !prompt || !tag) {
      return new Response(
        JSON.stringify({ error: "userId, prompt, and tag are required." }),
        { status: 400 }
      );
    }

    // Connect to the database
    await connectDB();

    // Create and save the new prompt
    const newPrompt = new Prompt({
      creator: userId,
      prompt: prompt,
      tag: tag,
    });

    await newPrompt.save();

    // Return a success response
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.error(`Error: ${error}`);
    // Return an error response
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
