"use client";

import Feed from "@components/Feeds";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <section className={"w-full flex-center flex-col"}>
      <h1 className={"head_text text-center"}>
        Discover & Share
        <br className={""} />
        <span className={"orange_gradient text-center"}>
          Ai-Powered Prompts
        </span>
      </h1>

      <p className={"desc text-center"}>
        Prompting is an opensource api bla bla bla ...
      </p>

      <button onClick={() => router.push("/abdullah")}>abdullah</button>
      <Feed />
    </section>
  );
};

export default Home;
