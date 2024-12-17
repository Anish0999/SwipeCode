import { useState } from "react";



function Child() {

    return (
       <div className="child">
            
       </div>
    )
}

function handleEvent() {
    console.log("test");
}

function Parent() {

    return (
       <div className="parent" style={{border: "2px solid red", backgroundColor: "green"}} onClick={handleEvent}>
            <h1>Hello</h1>
       </div>
    )
}

export default Parent