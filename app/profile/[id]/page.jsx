"use client";

import { useEffect, useMemo, useState } from "react";
import Profile from "@components/Profile";

const SingleProfileView = ({ params }) => {
  const [posts, setPosts] = useState([]);

  const userId = params?.id;

  const fetchPosts = async () => {
    if (!userId) return;
    try {
      const response = await fetch(`/api/users/${userId}/posts`);

      const data = await response.json();

      setPosts(data);
    } catch (e) {
      console.log(e);
    }
  };

  const userName = useMemo(() => {
    return posts?.[0]?.creator.username;
  }, [posts]);
  useEffect(() => {
    return () => {
      fetchPosts();
    };
  }, [userId]);

  return (
    <Profile
      name={userName}
      desc={"Welcome to your personalized Profile Page"}
      data={posts}
      handleEdit={() => {}}
      handleDelete={() => {}}
    />
  );
};

export default SingleProfileView;
