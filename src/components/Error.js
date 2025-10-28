import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.error(err);
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong.</h2>
      <h1>
        {err.status} {err.statusText}
      </h1>
      <p>{err.data}</p>
    </div>
  );
};
export default Error;
