import { useRouteError } from "react-router-dom"

function Error() {
    const error = useRouteError();
    // console.log(error , "error");
  return (
    <div>
        <h1>Error Page</h1>
        <h1>Status: {error.status} - {error.statusText}</h1>
        <h1>Error: {error.data}</h1>
    </div>
  )
}

export default Error