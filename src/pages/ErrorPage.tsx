import { useRouteError } from "react-router-dom";

interface myError {
  statusText: string,
  message: string
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as myError;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Page not found.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;