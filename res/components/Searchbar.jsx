import { useState } from "react";
import { C2_LINK1 } from "../constants";


const Searchbar = ()=>{

    const [searchVal , setSearchVal]=useState("Search Here !");
    return (
        <div className="Searchbar">
        <h1 className="text">Component-2 [Searchbar]</h1>
            <input type="text"
                value={searchVal}
                onChange={(e)=>{
                    
                    setSearchVal(e.target.value);
                }}
            />
            <h1>
                {searchVal}
            </h1>
            <div className="learnings">
                <ul>
                <h4>Learnings</h4>
                    <li>
                    By creating this component, I learned about  <a  className="link" href={C2_LINK1}>two-way data binding.</a>
                    </li>
                    <li>
                        How to use useState() hook
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Searchbar;