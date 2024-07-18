import React from "react"
import ReactDOM from "react-dom/client"
import Button from "./res/components/Button";
import Searchbar from "./res/components/Searchbar";


const root = ReactDOM.createRoot(document.getElementById("root"));

const Header =()=>{
    return <h1>I'm In Button Branch</h1>
}
const AppLayout = ()=>{

    return(
        <>
            <Button/>
            <Searchbar />
        </>
    );
}

root.render(<AppLayout />);



