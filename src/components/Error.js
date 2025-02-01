
import { useRouteError } from "react-router-dom";

const Error = () => {

    const errorMsg = useRouteError();

    return (
        <div className="Error">
            <h1>Oops!!! Something Went Wrong!</h1>
            <h1>{errorMsg.status} {errorMsg.statusText}</h1>
        </div>
    );
};

export default Error;