import ApiStatus from "@/types/api/ApiStatus";
import React from "react";

interface Props {
    status: ApiStatus;
    children: React.ReactNode;
}

function ApiLoader({status,children}:Props) {
    console.log("🔥 ApiLoader status:", status);
    return (
        <>
            {
                status === "isLoading" ?<p>is loading, Please wait</p> :
                    status ==='hasError' ?<p>there is an error with api</p>:
                        children
            }
        </>
    );
}

export default ApiLoader;