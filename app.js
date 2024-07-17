import React from "react"
import ReactDOM from "react-dom/client"
import Button from "./res/components/Button";


const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = ()=>{

    return(
        <>
            <Button/>
        </>
    );
}

root.render(<AppLayout />);



