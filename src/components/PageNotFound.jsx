import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const { status, statusText } = useRouteError();
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-8xl font-mono">OOPS! Something went wrong!</h1>
      <h2 className="text-4xl font-mono">{status + ":" + statusText}</h2>
    </div>
  );
};

export default PageNotFound;
