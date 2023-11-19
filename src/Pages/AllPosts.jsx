import React from "react";
import { PostCard, Container } from "../components";
import appwriteService from "../appwrite/config";
import { useState } from "react";
import { useEffect } from "react";
const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    appwriteService
      .getPosts([])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((error) => {
        //console.log(error.message);
      });
  };

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
