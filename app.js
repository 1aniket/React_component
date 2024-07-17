import React from "react"
import ReactDOM from "react-dom/client"
import Button from "./res/components/Button";


const root = ReactDOM.createRoot(document.getElementById("root"));

const Header =()=>{
    return <h1>I'm In Button Branch</h1>
}
const AppLayout = ()=>{

    return(
        <>
            <Button/>
        </>
    );
}

root.render(<AppLayout />);



