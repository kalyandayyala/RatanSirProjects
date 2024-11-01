import React from "react";

function VegOrNonVeg(){

    const items = [
        { id: 1001, name: "chicken", category: "non-veg" },
        { id: 1002, name: "mutton", category: "non-veg" },
        { id: 1003, name: "egg", category: "non-veg" },
        { id: 1004, name: "potato", category: "veg" },
        { id: 1005, name: "sambar", category: "veg" }
    ];


   const listitems = items.map(item => 
    <li key={item.id} style={{ color: item.category == "veg" ? "green" : "red" }}>
            Name: {item.name}, Category: {item.category}
        </li>
    );
    return(
        <>
        
        <h1>Food Items !......</h1>
        <ol>{listitems}</ol>
        
        </>
    )




}
export default VegOrNonVeg;