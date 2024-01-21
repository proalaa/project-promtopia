"use client";
import { useEffect, useState } from "react";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ProfileView = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/posts`);

    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = async (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you eant to delete this item?");

    if (!hasConfirmed) return;
    try {
      const response = await fetch(`/api/prompt/${post._id.toString()}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const filteredPosts = posts.filter((myPost) => myPost._id !== post._id);

        setPosts(filteredPosts);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Profile
      name={"My"}
      desc={"Welcome to your personalized Profile Page"}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfileView;
