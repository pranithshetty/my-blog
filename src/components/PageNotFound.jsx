import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const { status, statusText } = useRouteError();
  return (
    <div className="error-page">
      <h1>OOPS! Something went wrong!</h1>
      <h2>{status + ":" + statusText}</h2>
    </div>
  );
};

export default PageNotFound;
