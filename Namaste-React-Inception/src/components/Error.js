import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const err = useRouteError();
  return (
    <div  style={{"padding" : "10px"}}>
      <h1>Oops!!</h1>
      <h3>Something Went Wrong !</h3>
      <p>{err?.status} : {err?.statusText}</p>
    </div>
  );
};
export default ErrorPage;
