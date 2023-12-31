import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const authStatus = useSelector((state) => state.auth.status);
  //console.log("AuthStatus:", authStatus);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    appwriteService.getPosts().then((post) => {
      if (post) {
        setPosts(post.documents);
        setIsloading(false);
      }
      setIsloading(false);
    });
  }, []);
  //console.log("Posts:", posts);
  if (isLoading && authStatus)
    return (
      <Container>
        <Skeleton />
      </Container>
    );
  if (!authStatus) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                <p>Login to read posts</p>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  if (authStatus && posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                <p>No Blogs Availabe! Create a Blog post!</p>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
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

export default Home;
