import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();

    const newPrompt = new Prompt({ creator: userId, prompt, tag });

    console.log(newPrompt);
    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (e) {
    return new Response("Failed To Create a new a Prompt", { status: 500 });
  }
};
