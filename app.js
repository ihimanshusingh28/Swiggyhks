/**
 * 
 * <div>
 *      <div>
 *         <h1></h1>
 *      </div>
 * </div>
 * How will you create this type of structure in React
 * ReactElement(Obj)=> HTML (Browser Understands)
 */

// // First Create a Parent child structure using React 
// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child1"},
//         React.createElement(
//             "h1",
//             {},
//             "Im H1 tag")
//     )
// )

// Lets create siblings with React
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child1"},
       [React.createElement("h1",{},"Im H1 tag"), 
        React.createElement("h1",{},"Im H1 tag's twin brother") ]
    )
)


const heading = React.createElement(
    "h1",
    { id:"heading" },
    "This is react"
);
// {} this gives attributes like class id etc etc
//console.log(heading);
console.log(parent);
// What will this above line print on the console? 
// It will print the object because every react element is a JS object.
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
// Job is basically and create the H1 tag that brow ser understands its a converter
