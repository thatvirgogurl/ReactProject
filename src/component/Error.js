import { useRouteError } from "react-router-dom";

export default function Error() {
    const err = useRouteError();
  return (   
     <div>
      <h1>Ooops!</h1>
      <h1>Somthing went wrong!!❓❓🚫🚫</h1>
      <h2>{err.status+" : "+err.statusText}</h2>
    </div>
  );
}
