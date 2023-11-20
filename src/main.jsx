import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout, Login } from "./components/index.js";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home.jsx";
//import AddPost from "./Pages/AddPost";
// import EditPosts from "./Pages/EditPosts";
// import AllPosts from "./Pages/AllPosts";
//import Post from "./Pages/Post";
import PageNotFound from "./components/PageNotFound.jsx";
import Skeleton from "./components/Skeleton.jsx";

const AddPost = lazy(() => import("./Pages/AddPost"));
const EditPosts = lazy(() => import("./Pages/EditPosts"));
const AllPosts = lazy(() => import("./Pages/AllPosts"));
const Post = lazy(() => import("./Pages/Post"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            <Suspense fallback={<Skeleton />}>
              <AllPosts />
            </Suspense>
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <Suspense fallback={<Skeleton />}>
              <AddPost />
            </Suspense>
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <Suspense fallback={<Skeleton />}>
              <EditPosts />
            </Suspense>
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: (
          <Suspense fallback={<Skeleton />}>
            <Post />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
