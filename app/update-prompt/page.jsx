"use client";

import Form from "@components/Form";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
const CreatePrompt = ({ searchParams }) => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);

  const promptId = searchParams.id;
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);

      const data = await response.json();

      setPost({ prompt: data.prompt, tag: data.tag });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          tag: post.prompt,
          prompt: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type={"Edit"}
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default CreatePrompt;
