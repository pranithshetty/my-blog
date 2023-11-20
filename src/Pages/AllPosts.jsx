import React from "react";
import { PostCard, Container } from "../components";
import appwriteService from "../appwrite/config";
import { useState } from "react";
import { useEffect } from "react";
import Skeleton from "../components/Skeleton";
const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    appwriteService
      .getPosts([])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
          setIsloading(false);
        }
      })
      .catch((error) => {
        setIsloading(false);
        //console.log(error.message);
      });
  };

  if (isLoading)
    return (
      <Container>
        <Skeleton />
      </Container>
    );
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
