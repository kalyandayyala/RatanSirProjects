
import React from "react";
function App() {
    const items = [
        { id: 1001, name: "chicken", category: "non-veg" },
        { id: 1002, name: "mutton", category: "non-veg" },
        { id: 1003, name: "egg", category: "non-veg" },
        { id: 1004, name: "potato", category: "veg" },
        { id: 1005, name: "sambar", category: "veg" }
    ];


    const veglist =items.filter(item => item.category=="veg");
    const nonVegList =items.filter(item => item.category=="non-veg");

    let veglistItems = veglist.map(item => (
        <li key={item.id}>
            Name: {item.name}, Category: {item.category}
        </li>
    ));

    veglistItems= (veglistItems.length ==0)?"no veg items in the list":veglistItems;



    let nonVegListItems = nonVegList.map(item => (
        <li key={item.id}>
            Name: {item.name}, Category: {item.category}
        </li>
    ));
    nonVegListItems=(nonVegListItems.length ==0)?"no Nonveg items in the list":nonVegListItems;

   

    return (
        <>
            <h1>Veg Items Details</h1>
            <ol>{veglistItems}</ol>


            <h1>Non Veg Items Details</h1>
            <ol>{nonVegListItems}</ol>
        </>
    );
}

export default App;