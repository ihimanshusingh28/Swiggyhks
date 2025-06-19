// THIS IS A NOTES FOLDER
/** I WILL WRITE NOTES FROM THE SECOND LECTURE
 *  /**
 * 
 * <div>
 *      <div>
 *         <h1></h1>
 *      </div>
 * </div>
 * How will you create this type of structure in React
 * ReactElement(Obj)=> HTML (Browser Understands)
 


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


// // Lets create siblings with React
// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child1"},
//        [React.createElement("h1",{},"Im H1 tag"), 
//         React.createElement("h1",{},"Im H1 tag's twin brother") ]
//     )
// )

root.render(parent);

<!-- The basic order of Files that are imported should be  in Sequence 
Meaning: The app.js line should not be written before the React Import -->

<!-- Difference Between Production.js and Development.js -->

 <!-- Meaning of CrossOrgin? -->

 <!-- Exact work of Root.Render:
  The root.render replaces the things inside the root 
  and not appending it. It only works for the respective tags and id and each
   and every things will be replaced-->
  

    <!-- We have to import different types of react files 
     bcoz the first link is a core react and the second link(ReactDOM)
      acts as a bridge between the browser And the React 
      There are many superpowers that are hidden in the react and react dom 
      link which we have to make good use of
      
      For Creating Element in React we use this syntax:
      const elementName = React.createElement("name of tag", {object}, "What you have to write in React")-->
    
      <!-- <script>
        const heading = React.createElement("h1",{},"This is react");

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);
      </script> -->


    <!-- <script>
        const heading = document.createElement("h1");

        heading.innerHTML = "Hello World";
        const root = document.getElementById("root");
        root.appendChild(heading);
    </script> -->  


    <!-- Let's Use React for Printing Hello World in React -->
    

    // {} this gives attributes like class id etc etc
//console.log(heading);


// What will this above line print on the console? 
// It will print the object because every react element is a JS object.


// Job is basically and create the H1 tag that brow ser understands its a converter


/** JSX
 * JSX is not same to React 
 * JSX reduces the complexity of React 
 */

// SECOND LECTURE

// PACKAGE.JSON
/** 
 * It is a configuration for our NPM
 * JSON file is created
 * 
 * Need?? it will take care of the package and their versions
 * The most important package in react to be installed is a bundler
 * The bundler cleans, unifys, web pack(parcel, veet) these are bundlers
 * The bundlers bundles the codes so that it can be sent to the production 
 * The Create React app is itself is a bundler behind th scenes
 * We Will be using Parcel and it is our choice
 * 
 * The Parcel will come as a dev dependency and 
 * all the dependencies are shown in package.json   
 * */

// There are two types of dependencies, dev dependencies and normal dependencies
/**
 * dev dependencies = for development
 * Normal dependencies = for production also
 * I want parcel but want it as Dev dependencies that's why we write -D
 */

// NODE MODULES
/**
 * Node Modules contains all the folders 
 *   --that we fetched from the npm
 * It is a database 
 * It is veryy heavy 
 * It is very helpful for the code bundlers
 * We don't have to putr all the node modules on the git hub 
 */

// PACKAGE-LOCK.JSON
/**
 * package and package lock are different 
 * package keeps track of dependencies and package lock keeps the track of
 *  -exact newwest version of every dependencies
 */

// PARCEL
/**
 * 
 */

// CARET AND TILDE
/**
 * helps to auto update the version and keep it up to date
 */

/**
 * Runnng the Program
 *       npx parcel index.html - this cmd will make the server live  
 * 
 * npx means that you are executing a npm package "parcel"
 *  -and you give soucre file in CSS and HTML
 * The SCRIPTS are under the package.json 
 * We will now use npm  scripts for development and not html and css
 * With the help of scripts we do not have to write the npx parcel index.html again and again
 * IT IS AN INDUSTRY STANDARD
 * for starting the project cmd: npm run script-name or npm script-name
 * for building: npm run build-name
 *    
 */

/**
 * import React from "react";
 * import ReactDOM from "react-dom/client";
 *  
 *  // React Element 
 * const heading  = React.createELement("h1",{},"Namste React"); 
 * 
*
/**
 * 
 * After installing the react and reactDOm from npm we do not use cdn links and we can 
import them and we have to change the type="module" in script tag in index.html 

// Parcel does for us:
- Dev Build
- Local Server
- HMR- Hott Module Replacement (Bhak Bhak update kar deta hai)
- File watching algorithm - Writen in C++
- Cashing - Faster Builds
- Image Optimisation
- Bundling
- Compress 
- Consistent Hshing 
- Code Spliting 
- Differential Bundling : Support Browsers incl older browsers
- HTTPs
- Tree Shaking - Remove Unused Code for You
- Diff Dev and Prod bundle  
 
Do Read Parcel DOCUMENTATION 
*/

// THIRD LECTURE

/** 
 * JSX 
 * JSX is a JS syntax which is used to create syntax like HTML in Java Script
 * React is Different and JSX Different
 * it merges html and js 
 * It is not HTML and they both are differnet
 * HTML like HTML and XML 
 * 
 * Babel is used for converting Java 
 * BABEL is a JavaScript Compiler 
 *  
 * /**
import React from "react";
import ReactDOM from "react-dom/client"
// const parent1 = React.createElement("div",{},'Running React');
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent)

// Lets create siblings with React
const parent2 = React.createElement
("div", {id:"parent"},
[
    React.createElement("div",{id:"child342569"},[
    React.createElement("h1",{key:"uniqueId1" }, "1"), 
    React.createElement("h2",{key:"uniqueId2" },"2")]),

    React.createElement("div",{id:"fghghjh"},[
    React.createElement("h1",{key:"uniqueId3" }, "11"), 
    React.createElement("h2",{key:"uniqueId4" }, "22")])
]);
console.log(parent2);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2);
*/

// Lecture 3
// npx means executing source file using parcel 
// let's begin everything from the start



// // React.createelement => Object => HTML ELement(render)
// const heading = React.createElement("h1",{id:"heading"},"This is heading");
// const roottt = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX heading (transpiled before it readche - PRASEL, )bABEL
// JSX => REACT.CREATEELEMENT => REACT ELEMENT = JS OBJ => HTML ELEMENT =======>>>>> BABEL IS DOING ALL OF THIS FOR US 
// const Title = () =>
// {
// <h1 id="Headinggg" className="heading" tabIndex="1">
//     Namaste React using JSX
// </h1>
// }

//React Components: Class Based Componets- Old ways FUnctional Component - New Way

// React Functional COmponent is Just another jS function which returns some JSX or React
// const Heading = () => {
//     // We can render the title component in another component using following syntax
//     <div id="container">
//      <Title />
//             <h1 class="ABC">Namste React</h1>; 
//      </div>
// }
// const Headingg = () => {<h1 class="ABC">Namste React</h1>};
// const Headinggg = () => <h1 class="ABC">Namste React</h1>;
// All of the above functions returns the same thing in JavaScript

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const root = ReactDOM.createRoot((""),{id:therealheaidng}, "This will be tough");
// root.render(jsxHeading);
// we cannot render functional component in root.render we would do like this 
// root.render(<HeadingComponent />);
// which are the other other attributes in jsx 
// if jsx is in single line it is okay but if you write in multiple lines you need paraenthesis

// Difference between Component  Argument Element 


/*
import React from "react";
import ReactDOM from "react-dom/client";


const Title = () =>
(
    <h1 className="Heading" tabIndex="2">
        Namaste React using JSX
    </h1>
);


const HeadingComponent = () => (
    // We can render the title component in another component using following syntax
    <div id="container">
     {Title()};
     {<Title />}
     {<Title></Title>}
         <h1 className="ABC">Namaste React</h1>
     </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
*/

// // Lecture 4

// resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurant[0].info.
// resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurant[0].info.
// resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurant[0].info.
// resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurant[0].info.
// resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurant[0].info.

/**        !-- <script crossorigin 
    src="https://unpkg.com/react@18/umd/react.development.js">
    </script>

    <script crossorigin
     src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
    </script> -->


      <!-- <script type="module" src="app.js"></script> -->
 */


// Whenever a State Member Updates the react rerenddes the component
// reconciliation Algorithm : React Fibre 
/** --------- SUppose we have a dom and RES container with 15 restau cards
 * my ui changes from filtering the 7 cards to 3 cards sooo why react is fast 
 * react creatges a virtual dom 
 * the virtual dom is representation of an actual dom while normal dom is 
 * <div>
 *     <h1></H1>
 * <div/>
 * 
 * what is representation of virtual dom:
 * ----REact element is JS OBj
 *     IN a big structure all of its is treated as an obj 
 *     THe obj is react virtual dom is nothing but a normal js obj 
 *     IT is a representaion of normal dom 
 * 
 * DIFF algorithm finds out the diff between prev virtual dom and after vitrual dom 
 * DIfference bw old and new virtual DOm 
 *
 * *//* <div className="container-cards">
                {listOfRestaurant.map((response) =>(
                   <RestaurantCards key={response.info.id} resData = {response.info} />
))} */
/**
 * MOnolith : Earlier the apps were built using monolith
 *            all of the code and project was in the same file
 *            even for a small change we have to compile the whole project
 * 
 * Microservices :
 *           different service for different job 
 *           ui service, auth servuice, back end, data management all combined forms an app
 * 
 *           Separation of Concerns 
 * how do they interact with each other??
 * Connections:  WITH pORTS
 * Our microservice is written in React 
 * SMS Services
 * 
 * How do this React connect with the world
 * Approach 1:
 * When we start the page we can connect to tghe data usig the api and then we can render all thatv
 * Approach 2:
 * As soon as the page loads we will quickly render it and then we will call the api and then re render 
 * In React we will always use the second approach 
 *  React has one of the best and fastest rendoring stuff
 

// import mockData from "../mockData";
// import RestaurantCards from "./RestaurantCards";

// import { useState } from "react";


// const Body = () => {
//         // const restaurantList = mockData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
//         // console.log(restaurantList);

//         const [listOfRestaurants , setlistOfRestaurants] = useState(mockData)
//     return (
//         <div className="body">
//             <div className="filter">
//                <button className="filter-btn"
//                        onClick={()=>{
//                           const filteredList = listOfRestaurants.filter(
//                             (res) => res.data.avgRating >= 4 
//                         );
//                         setlistOfRestaurants(filteredList);
//                }} 
//                >
//                Top Rated Restaurants
//                </button>
//                 </div>
 

//                <div className="res-container">
//                     {listOfRestaurants.map((restaurant) => (
//                     <RestaurantCards key={restaurant.info.id} resData={restaurant.info} />
//                     ))}
//                </div>
//          </div>
//     );
// };

// export default Body;



import mockData from "../mockData";
import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";

const Body = () => {
  // Extract the actual restaurant list from the mockData:
  const originalList = mockData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  const [listOfRestaurants, setListOfRestaurants] = useState(originalList);


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>


      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCards key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
*/


  // Extract the actual restaurant list from the mockData:
//   const originalList = mockData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
//   const [listOfRestaurants, setListOfRestaurants] = useState(originalList); Because of this line the old mock data was coming we  will now ake the array empty 
 



// import RestaurantCards from "./RestaurantCards";
// import { useEffect, useState } from "react";

// const Body = () => {
//    const [listOfRestaurants, setListOfRestaurants] = useState([]);
  
//      useEffect (()=> {
//          fetchData();
//         }, []);

//     const fetchData = async () => {
//         const data = await fetch(
//        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.41697676320357&lng=77.04467482119388&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//          );

//     const  json = await data.json();

//     console.log(json);
//     setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//     // The above is a bad practice for writing the React Code Instead we can use optional chainning 
// };
 

//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = listOfRestaurants.filter(
//               (res) => res.info.avgRating >= 4.5
//             );
//             setListOfRestaurants(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>


//       <div className="res-container">
//         {listOfRestaurants.map((restaurant) => (
//           <RestaurantCards key={restaurant.info.id} resData={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

// import mockData from "../mockData";
// import RestaurantCards from "./RestaurantCards";

// import { useState } from "react";


// const Body = () => {
//         // const restaurantList = mockData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
//         // console.log(restaurantList);

//         const [listOfRestaurants , setlistOfRestaurants] = useState(mockData)
//     return (
//         <div className="body">
//             <div className="filter">
//                <button className="filter-btn"
//                        onClick={()=>{
//                           const filteredList = listOfRestaurants.filter(
//                             (res) => res.data.avgRating >= 4 
//                         );
//                         setlistOfRestaurants(filteredList);
//                }} 
//                >
//                Top Rated Restaurants
//                </button>
//                 </div>
 

//                <div className="res-container">
//                     {listOfRestaurants.map((restaurant) => (
//                     <RestaurantCards key={restaurant.info.id} resData={restaurant.info} />
//                     ))}
//                </div>
//          </div>
//     );
// };

// export default Body;


// import RestaurantCards from "./RestaurantCards";
// import { useEffect, useState } from "react";

// const Body = () => {
//    const [listOfRestaurants, setListOfRestaurants] = useState([]);
  
//      useEffect (()=> {
//          fetchData();
//         }, []);

//     const fetchData = async () => {
//         const data = await fetch(
//        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.41697676320357&lng=77.04467482119388&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//          );

//     const  json = await data.json();

//     console.log(json);
//     setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//     // The above is a bad practice for writing the React Code Instead we can use optional chainning 
// };
 

//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = listOfRestaurants.filter(
//               (res) => res.info.avgRating >= 4.5
//             );
//             setListOfRestaurants(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>


//       <div className="res-container">
//         {listOfRestaurants.map((restaurant) => (
//           <RestaurantCards key={restaurant.info.id} resData={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;


// This is conditional rendering : The rendering on the basis of conditions is known as conditional rendering 
//   if(listOfRestaurants.length==0){
//     return <Shimmer />
//   }
// Instead of this we can use ternary operator in the main return function  
// SHIMmer ai shows a fake page instead of loading sign
// We will not use the normal loader because it is not trendy these days rather we will use the SHIMMER AI 
// Whenever we write something the local state var is change the react re renders the component even at this small thing the whole body is re rendered 
// Whenever state var updates react run the reconciliation and re rendering 
 

// Default Export Works for only one Exports  which is said to be by default 
// For Exporting large no. of constants or files we use named export for which we 
// write the export term just in front of the const which we want to export

// for importing 
// import {whatever you want to import}

/* Code for Pop Up

/* Popup container */
/* .popup {
width: 50%;
height: 400px;
  position: relative;
  display: inline-block;
  cursor: pointer;  
  background-image: url("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2hneTlqOGNsejVlNGN5MHZ4YWFrMWJvZDk2eWl2Y2FsOHF3YTV5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RqJkMmmfJ2ZYwt2coj/giphy.gif");
  background-size: cover;
  justify-content: center;
}  */
/* Add animation (fade in the popup) */
/* @-webkit-keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}
@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
} *

// import {useState, useEffect } from "react";
// import Shimmer from "./Shimmer";


// const RestaurantMenu = () => {


//     const [resInfo, getresInfo] = useState(null);
//     useEffect(()=>{
//         fetchMenu();
//     }, [])

//     const fetchMenu = async () => {
//         const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=807690&catalog_qa=undefined&submitAction=ENTER")

//         const json = await data.json()

//         console.log(json);
//         getresInfo(json.data);
//     };

//    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
//     return resInfo==null ?( <Shimmer/>) : (
//         <div className="menu">
//             <h1>{name}</h1>
//             <h1>{cuisines}</h1>
//             <h1>{costForTwoMessage}</h1>
//             <ul>
//                 <li>Biryani</li>
//                 <li>vdsb</li>
//                 <li>dnfnbn</li>
//                 <li>ghafdh</li> 
//             </ul>
//         </div>
//     )
// }
// export default RestaurantMenu;

*/

// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     try {
//       const data = await fetch(
//         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=807690&catalog_qa=undefined&submitAction=ENTER"
//       );
//       const json = await data.json();
//       console.log(json);
//       setResInfo(json.data);
//     } catch (error) {
//       console.error("Error fetching menu:", error);
//     }
//   };

//   // Show shimmer while data is loading
//   if (resInfo == null) return <Shimmer />;

//   // Safe destructuring after data is confirmed to be loaded
//   const restaurantInfo = resInfo?.cards?.[0]?.card?.card?.info;
//   const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <h2>{cuisines?.join(", ")}</h2>
//       <h3>{costForTwoMessage}</h3>

//     </div>
//   );
// };

// export default RestaurantMenu;



// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     try {
//       const data = await fetch(
//         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=807690&catalog_qa=undefined&submitAction=ENTER"
//       );
//       const json = await data.json();
//       console.log(json);
//       setResInfo(json.data);
//     } catch (error) {
//       console.error("Error fetching menu:", error);
//     }
//   };

//   // Handle loading
//   if (!resInfo) return <Shimmer />;

//   // Check that restaurantInfo exists before destructuring
//   const restaurantInfo = resInfo?.cards?.find(
//     (card) => card?.card?.card?.info
//   )?.card?.card?.info;

//   if (!restaurantInfo) {
//     return <h2>Unable to load restaurant info</h2>;
//   }

//   const { name, cuisines, costForTwoMessage } = restaurantInfo;

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <h2>{cuisines?.join(", ")}</h2>
//       <h3>{costForTwoMessage}</h3>
//     </div>
//   );
// };

// export default RestaurantMenu;



// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     try {
//       const data = await fetch(
//         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=807690&catalog_qa=undefined&submitAction=ENTER"
//       );
//       const json = await data.json();
//       console.log(json);
//       setResInfo(json.data);
//     } catch (error) {
//       console.error("Error fetching menu:", error);
//     }
//   };

//   // Don't try to render if data is still loading
//   if (resInfo==null) return <Shimmer />;

//   // Safely find the card that contains .info
//   const { id, category, description} = 
//   resInfo?.cards[0]?.card?.card?.info;

//   const{itemCards} =
//   resInfo?.cards[4]?.groupCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card

//   console.log(itemCards);

//   return (
//     <div className="menu">
//     <h1>{id}</h1>
//     <p>
//         {category} - {description}
//     </p>
//     <h2> Menu</h2>
//     <ul>
//         <li>{itemCards[0].card.info.name}</li>
//         <li>Burgers</li>
//         <li>Diet Coke</li>
//     </ul>

//     </div>
//   );
// };

// export default RestaurantMenu;

/**
 * When the compiler compiles the code and comes to 
 * the UserCLass line it founds that a class is here 
 * attached and then a new instance of the classs is
 *  created and constructor is called and then the
 *  class is rendered.
 */

      // Most people use this component did mount for api 
        // use Effect is used in functional component for making api calls 
        // This is how we make api call in Class COmponent 

        // So after running the two combined codes (user class and about )together we assumes /**
        // that the order must be 
        // - Parent COnstructor
        // - parent Render 
        //      - Child COns
        //      - chiild Render
        //      - CHild ComponentdidmOunt
        //    
        //      - Child COns
        //      - chiild Render
        //      - CHild ComponentdidmOunt 
        // - Parent Component did mount
        // But this is not the case the true case is like this
        // 
        // - Parent COnstructor
        // - Parent Render 
        //      - Child Cons
        //      - chiild Render
        //    
        //      - Child COns
        //      - chiild Render
        //      - Child ComponentdidmOunt CHild1
        //      - Child ComponentdidmOunt CHild2
        // - Parent Component did mount
        // 
        // Why did this happened ??
        // The React Life cycle Diagram for mounting
        //  */


        /**
         * // Class based COmponent 
// Class based component is normal JS Class
import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name+"Child Constructor"); 
        // This is how we use state in class
        this.state = {
            count: 0,
            count2: 1,
        };
    // State Variables in Class Components  
    }
    
    componentDidMount() {
        // First the constructor called, second the render and then when the class based component is mounted the it is called 
        console.log(this.props.name+"Child Component Did Mount")
  
    }

    render(){
        // We will have a render method which will return some peice of JSX
        console.log(this.props.name+"Child Render")
        const {name, location } = this.props;
        const {count, count2} = this.state;

        return ( 
           <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>

            <button onClick={()=>{
                 // For Modifying, we will never our state variables directly is won't update
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 5
                })
            }}>
                Count Increases
            </button>
            <h2>HP{name}</h2>
            <h3>LOC: Gurgaon {location}</h3>
            <h4>Contact: @harshpal</h4>
           </div>
        )
    }
}

export default UserClass;

// Class Base Component is mounted on web page :
// Behind the scenes: 
        \
        
        
                // This is how we use state in class
        this.state = {
            count: 0,
            count2: 1,
        };
    // State Variables in Class Components  */



    /*
There are many frameworks on which we can do our css
 - Normal CSS
 - SASS
 - SCSS
 - React Styled Component (new)
 - BootStrap (new-popular)
 - Material UI
 - Chakra UI
 - ANT UI
 - We Are Going To Use - TAILWIND- (trending)
 TAIL WIND CAN WORK WITH ANY FRAMEWORK
  */


/** 
.header {
    background-color: #333446;
    display: flex;
    justify-content: space-between;
    border: 1px Solid black;
    color: #F5EEDD;
}


.logo {
    background-size: cover;
    border: 1px Solid black;
    width: 150px;
    height: 100%;
}


.nav-icons > ul {
    display: flex;
    font-size: 24px;
    list-style-type: none;
    font-weight: bold;
    padding-right: 20px;
}

.nav-icons > ul > li {
    padding: 20px;
    margin: 15px;
}

.logo-restaurant{
    margin: 5px;
    width: 153px;
    height: 200px;
}

.restaurant-cards:hover {
    border: 5px solid rgb(5, 25, 43);
    cursor: pointer;
    border-radius: 5px;
    /* transform: rotate(deg); */
     /** 
    background: linear-gradient(right, #3d3f65, #7F8CAA);
}

.logo-restaurant{
    width: 240px;
    height: 230px;
    object-fit: cover;
}

.restaurant-cards {
    margin: 15px;
    padding: 10px;
    width: 250px;
    background-color: #B8CFCE;
}

.res-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.filter-btn{
    margin: 10px;
    cursor: pointer;
}

.shimmer-card{
    height: 450px;
    padding: 10px;
    width: 165px;
    border: 1px Solid black;
    background-color: #60627b;
    opacity: 0.5;
}
.shimmer-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.login {
    padding: 20px;
    width: 50px;
    height: 20px;
}

.filter{
    display: flex;
    margin: 10px;
}

*/



// import './index.css';
// import React , {lazy, Suspense} from 'react';
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import Header from "./Components/Header";
// import Body from "./Components/Body";
// import Footer from "./Components/Footer";
// import Shimmer from "./Components/Shimmer";
// import About from "./Components/About";
// import ContactUs from "./Components/ContactUs";
// import Error from "./Components/Error";
// import RestaurantMenuPage from "./Components/ReataurantMenuPage";
// import Cart from "./Components/Cart";

// // import Grocery from "./Components/Grocery";
// // Chunking or Code Splitting . Dynamic Bundling . 
// // Layout component with shared structure

// // CHunking 
// // Dynamic Bundling
// // lazy Loading 
// // On Deman Loading
// // Dynamic Import 

// // Custom Hooks 

// const  Grocery = lazy(() => import("./Components/Grocery"));

  
// const FinalApp = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Outlet /> {/* This will render the child route component */}
//       <Footer />
//     </div>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <FinalApp />,
//     children: [
//       {
//         path: "/",
//         element: <Body/>
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//       {
//         path: "contact",
//         element: <ContactUs/>
//       },
//       {
//         path: "grocery",
//         element: <Suspense fallback={<Shimmer />}><Grocery/></Suspense>
//       },
//       {
//         path: "restaurant/:resId",
//         element: <RestaurantMenuPage />
//       },
//     ],
//     errorElement: <Error/>,
//   },
//   ],
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);


// import React from "react";
// import  { lazy, Suspense } from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import Header from "./Components/Header";
// import Body from "./Components/Body";
// import Footer from "./Components/Footer";
// import Shimmer from "./Components/Shimmer";
// import About from "./Components/About";
// import ContactUs from "./Components/ContactUs";
// import Error from "./Components/Error";
// import RestaurantMenuPage from "./Components/RestaurantMenuPage";
// import Cart from "./Components/Cart";

// // Lazy load Grocery component for code splitting
// const Grocery = lazy(() => import("./Components/Grocery"));

// // Layout component with header and footer shared among routes
// const FinalApp = () => {
//   return (
//     <div>
//       <Header />
//       <Outlet /> {/* Render matched child route component here */}
//       <Footer />
//     </div>
//   )
// };

// // Router setup with nested routes
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <FinalApp />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//       {
//         path: "contact",
//         element: <ContactUs />,
//       },
//       {
//         path: "grocery",
//         element: (
//           <Suspense fallback={<Shimmer />}>
//             <Grocery />
//           </Suspense>
//         ),
//       },
//       {
//         path: "restaurant/:resId",
//         element: <RestaurantMenuPage />,
//       },
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);
// // 
// import { useEffect, useState } from "react";
// import { MENU_API_URL } from "./constants";

// const useRestaurantMenu = (resId) => {

//     const [resInfo, getresInfo] = useState(null);
    
//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         const data = await fetch(MENU_API_URL + resId);

//         const json = await data.json();

//         getresInfo(json); 
//     }

//     return resInfo;
// }

// export default useRestaurantMenu;


// // Gives access to hook 
// // Hook is use ROute error
// // Recent development of React and ITs dom 
// import {useRouteError} from "react-router-dom";
// const Error = () => {
//     const err = useRouteError();
//     console.log(err);
//     return (
//         <div>
//             <h1>Oopsssssssss Something went wrong</h1>
//             <h3>{err.status}</h3>
//         </div>
//     )
// }
// export default Error;

// // import { useState, useEffect } from "react";
// // import Shimmer from "./Shimmer";
// // import {useParams} from "react-router-dom";
// // import { MENU_API_URL } from "../constants";
// // import useRestaurantMenu from "../useRetaurantMenu";

// // const RestaurantMenu = () => {

// //   const {resId} = useParams();
// //   const resInfo = useRestaurantMenu(resId);



// //   if (resInfo == null) return <Shimmer />;

// //   // ✅ Safely access restaurant info
// //   const restaurantInfo = resInfo?.cards?.find(
// //     (c) => c?.card?.card?.info
// //   )?.card?.card?.info;

// //   const { id, name, cuisines, costForTwoMessage } = restaurantInfo || {};

// //   // ✅ Safely access itemCards list
// //   const regularCards = resInfo?.cards?.find(
// //     (c) => c?.groupCard?.cardGroupMap?.REGULAR
// //   )?.groupCard?.cardGroupMap?.REGULAR?.cards;

// //   const menuCard = regularCards?.find(
// //     (c) => c?.card?.card?.itemCards
// //   )?.card?.card;

// //   const itemCards = menuCard?.itemCards || [];

// //   return (
// //     <div className="menu">
// //       <h1>{name} (ID: {id})</h1>
// //       <h2>{cuisines?.join(", ")}</h2>
// //       <h3>{costForTwoMessage}</h3>

// //       <h2>Menu</h2>
// //       <ul>
// //         {/* {itemCards.map((item, index) => (
// //           <li key={item.card.info.id || index}>
// //             {item.card.info.name} - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
// //           </li>
// //         ))} */}
// //         {itemCards.map(item => (
// //             <li key={item.card.info.id}>
// //                 {item.card.info.name}
// //             - {" "}{item.card.info.defaultPrice/100 || item.card.info.price/100}
// //             </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default RestaurantMenu;


// import React from "react";
// import { useParams } from "react-router";
// import Shimmer from "./Shimmer";
// import useRestaurantMenu from "../useRestaurantMenu";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);

//   if (resInfo == null) return <Shimmer />;

//   // Safely extract restaurant info
//   const restaurantInfo = resInfo?.cards?.find((c) => c?.card?.card?.info)
//     ?.card?.card?.info;

//   const { id, name, cuisines, costForTwoMessage } = restaurantInfo || {};

//   // Get the list of regular menu cards
//   const regularCards = resInfo?.cards?.find(
//     (c) => c?.groupCard?.cardGroupMap?.REGULAR
//   )?.groupCard?.cardGroupMap?.REGULAR?.cards;

//   // Get itemCards from the regular menu cards
//   const menuCard = regularCards?.find((c) => c?.card?.card?.itemCards)
//     ?.card?.card;

//   const itemCards = menuCard?.itemCards || [];

//   return (
//     <div className="menu">
//       <h1>
//         {name} (ID: {id})
//       </h1>
//       <h2>{cuisines?.join(", ")}</h2>
//       <h3>{costForTwoMessage}</h3>

//       <h2>Menu</h2>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} - ₹
//             {(item.card.info.defaultPrice || item.card.info.price) / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",  // Add this line
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };


// import { LOGO_URL } from "../constants";
// import { useState } from "react";
// import {Link} from "react-router-dom";
// import useOnlineStatus from "../useOnlineStatus";

// const Header = () => {
//   const [buttonName , getbuttonName] = useState("Login")
//     return (
//     <div className="flex justify-between shadow-lg bg-gray-500 mb-2 px-2">

//       <div className="logo-container">
//           <img className="w-40 "
//                src={LOGO_URL}
//           />
//       </div>

//       <div className="flex items-center">
//         <ul className="flex">
//           <li className="px-3">
//             Online Status: {useOnlineStatus? "Green" : "Red"}
//             </li>
//           <li className="px-3">
//             <Link to="/"> Home</Link>
//             </li>
//           <li className="px-3">
//             <Link to="/about">About Us</Link>
//             </li>
//           <li className="px-3">
//             <Link to="./contact">Contact Us</Link>
//             </li>
//           <li className="px-3">
//             <Link to="./grocery">Grocery</Link>
//             </li>
//           <li className="px-3">
//             <Link to="./cart">Cart</Link>
//             </li>
          
//           <button className="Login"
//             onClick={()=> {
//             buttonName== "Login" 
//              ? getbuttonName("Logout")
//              : getbuttonName("Login");
//            } } 
//           // So here when we use normal JS variable the Logic will change to logout but the ui will not change 
//           >{buttonName}</button>
//         </ul>
//       </div> 
//     </div>
//     )
//  }
//  export default Header;

// import React, { useEffect, useState } from "react";
// import RestaurantCards from "./RestaurantCards";
// import Shimmer from "./Shimmer";
// import { FOODAPP_URL } from "../constants";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../useOnlineStatus";


// const Body = () => {
// console.log("Body got Rendered");
//   const [listOfRestaurants, setListOfRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     fetchRestaurants();
//   }, []);

//   const fetchRestaurants = async () => {
//     try {
//         const response = await fetch(FOODAPP_URL);
//       console.log("Fetching from:", FOODAPP_URL);
//       console.log("Fetch Response",response)
//       if(!response.ok){
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const json = await response.json();

//       const restaurantList =
//         json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

//       if (Array.isArray(restaurantList)) {
//         setListOfRestaurants(restaurantList);
//         setFilteredRestaurants(restaurantList); // show all initially
//       } else {
//         console.warn("Unexpected restaurant data:", restaurantList);
//       }
//     } catch (error) {
//       console.error("Error fetching restaurants:", error);
//     }
//   };

//   const filterTopRated = () => {
//     const filtered = listOfRestaurants.filter(
//       (res) => res.info.avgRating >= 4.5
//     );
//     setFilteredRestaurants(filtered);
//   };

//   const handleSearch = () => {
//     console.log("changed")
//     const filtered = listOfRestaurants.filter((res) =>
//       res.info.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setFilteredRestaurants(filtered);
//   };


//   const onlineStatus = useOnlineStatus ();
//   if(onlineStatus == false) 
//     return (
//     <h1>"Looks like you are Offline"</h1>
//   );

//   return listOfRestaurants.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="bg-gray-400">

//       <div className="flex">
//         <div className="m-4 p-4">

//           <input
//             type="text"
//             className="border border-solid border-zinc-900 p-2  rounded-sm"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             placeholder="Search restaurants"
//           />

//             <button className=" border border-solid border-zinc-900 bg-green-200 px-4 py-2 rounded-sm" 
//               onClick={handleSearch}>
//               Search
//             </button>
//         </div>

//         <div className="m-4 p-4 flex items-center ">
//           <button
//             className="px-4 py-2 bg-gray-100"
//             onClick={filterTopRated}>
//                 Top Rated Restaurants
//           </button>
//        </div>
//     </div>

//       <div className="flex flex-wrap justify-between">
//         {filteredRestaurants.map((restaurant) => (
//          <Link key={restaurant.info.id} to={"./restaurant/"+ restaurant.info.id }> <RestaurantCards
//             resData={restaurant.info}
//           /></Link> 
//         ))}src/
// ├── Components/
// │   ├── RestaurantMenu.js
// ├── useRestaurantMenu.js
//       </div>
//     </div>
//   );
// };

// export default Body;
















// // import React, { useEffect, useState } from "react";
// // import RestaurantCards from "./RestaurantCards";
// // import Shimmer from "./Shimmer";
// // import { FOODAPP_URL } from "../constants";
// // import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
// // import useOnlineStatus from "../useOnlineStatus";
// // import { withPromotedLabel } from "./RestaurantCards";

// // const Body = () => {
// //   console.log("Body got Rendered");

// //   const [listOfRestaurants, setListOfRestaurants] = useState([]);
// //   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
// //   const [searchText, setSearchText] = useState("");
  
// //   const RestaurantCardPromoted = withPromotedLabel(RestaurantCards);

// //   useEffect(() => {
// //     fetchRestaurants();
// //   }, []);

// //   const fetchRestaurants = async () => {
// //     try {
// //       const response = await fetch(FOODAPP_URL);
// //       console.log("Fetching from:", FOODAPP_URL);
// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }
// //       const json = await response.json();
// //       const restaurantList =
// //         json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
// //           ?.restaurants;

// //       if (Array.isArray(restaurantList)) {
// //         setListOfRestaurants(restaurantList);
// //         setFilteredRestaurants(restaurantList); // show all initially
// //       } else {
// //         console.warn("Unexpected restaurant data:", restaurantList);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching restaurants:", error);
// //     }
// //   };

// //   const filterTopRated = () => {
// //     const filtered = listOfRestaurants.filter(
// //       (res) => res.info.avgRating >= 4.5
// //     );
// //     setFilteredRestaurants(filtered);
// //   };

// //   const handleSearch = () => {
// //     const filtered = listOfRestaurants.filter((res) =>
// //       res.info.name.toLowerCase().includes(searchText.toLowerCase())
// //     );
// //     setFilteredRestaurants(filtered);
// //   };

// //   const onlineStatus = useOnlineStatus();
// //   if (onlineStatus === false)
// //     return <h1>Looks like you are Offline</h1>;

// //   return listOfRestaurants.length === 0 ? (
// //     <Shimmer />
// //   ) : (
// //     <div className="bg-gray-400">
// //       <div className="flex">
// //         <div className="m-4 p-4">
// //           <input
// //             type="text"
// //             className="border border-solid border-zinc-900 p-2 rounded-sm"
// //             value={searchText}
// //             onChange={(e) => setSearchText(e.target.value)}
// //             placeholder="Search restaurants"
// //           />

// //           <button
// //             className="border border-solid border-zinc-900 bg-green-200 px-4 py-2 rounded-sm"
// //             onClick={handleSearch}
// //           >
// //             Search
// //           </button>
// //         </div>

// //         <div className="m-4 p-4 flex items-center ">
// //           <button className="px-4 py-2 bg-gray-100" onClick={filterTopRated}>
// //             Top Rated Restaurants
// //           </button>
// //         </div>
// //       </div>

// //       <div className="flex flex-wrap justify-between">
// //         {filteredRestaurants.map((restaurant) => (
// //   <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
// //     {
// //       restaurant.info?.promoted 
// //         ? <RestaurantCardPromoted resData={restaurant} />
// //         : <RestaurantCards resData={restaurant} />
    
// //     }
    
// //   </Link>
  
// // ))}
// //       </div>
    
// //     </div>
// //   );
// // };

// // export default Body;

























// // import React, { useEffect, useState } from "react";
// // import RestaurantCards from "./RestaurantCards";
// // import Shimmer from "./Shimmer";
// // import { FOODAPP_URL } from "../constants";
// // import { Link } from "react-router-dom";
// // import useOnlineStatus from "../useOnlineStatus"; 
// // import { withPromotedLabel } from "./RestaurantCards";

// // const Body = () => {
// //   console.log("Body got Rendered");

// //   const [listOfRestaurants, setListOfRestaurants] = useState([]);
// //   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
// //   const [searchText, setSearchText] = useState("");

// //   // const RestaurantCardPromoted = withPromotedLabel(RestaurantCards);

// //   const onlineStatus = useOnlineStatus();
// //   if (!onlineStatus) return <h1>🔴 Looks like you are Offline</h1>;

// //   useEffect(() => {
// //     fetchRestaurants();
// //   }, []);

// //   const fetchRestaurants = async () => {
// //     try {
// //       const response = await fetch(FOODAPP_URL);
// //       console.log("Fetching from:", FOODAPP_URL);

// //       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

// //       const json = await response.json();

// //       const restaurantList =
// //         json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

// //       if (Array.isArray(restaurantList)) {
// //         setListOfRestaurants(restaurantList);
// //         setFilteredRestaurants(restaurantList);
// //       } else {
// //         console.warn("Unexpected restaurant data:", restaurantList);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching restaurants:", error);
// //     }
// //   };

// //   const filterTopRated = () => {
// //     const filtered = listOfRestaurants.filter(
// //       (res) => parseFloat(res.info?.avgRating) >= 4.5
// //     );
// //     setFilteredRestaurants(filtered);
// //   };

// //   const handleSearch = () => {
// //     const filtered = listOfRestaurants.filter((res) =>
// //       res.info.name.toLowerCase().includes(searchText.toLowerCase())
// //     );
// //     setFilteredRestaurants(filtered);
// //   };

// //   return listOfRestaurants.length === 0 ? (
// //     <Shimmer />
// //   ) : (
// //     <div className="bg-gray-100 min-h-screen px-6 py-4">
// //       {/* 🔍 Search & Filter Controls */}
// //       <div className="flex flex-wrap items-center gap-4 mb-6">
// //         <input
// //           type="text"
// //           className="border border-gray-700 p-2 rounded-md"
// //           value={searchText}
// //           onChange={(e) => setSearchText(e.target.value)}
// //           placeholder="Search restaurants..."
// //         />
// //         <button
// //           className="bg-green-300 px-4 py-2 rounded-md border border-gray-700"
// //           onClick={handleSearch}
// //         >
// //           Search
// //         </button>
// //         <button
// //           className="bg-gray-200 px-4 py-2 rounded-md border border-gray-700"
// //            onClick={filterTopRated}
// //         >
// //           Top Rated Restaurants
// //         </button>
// //       </div>

// //       {/* 🍽 Restaurant Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {filteredRestaurants.map((restaurant) => (
// //           <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
            
// //               <RestaurantCards resData={restaurant} />
// //           </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };
// // export default Body;









// // import React, { useEffect, useState } from "react";
// // import RestaurantCards from "./RestaurantCards";
// // import Shimmer from "./Shimmer";
// // import { FOODAPP_URL } from "../utils.js/constants";
// // import { Link } from "react-router-dom";
// // import useOnlineStatus from "../utils.js/useOnlineStatus";

// // const Body = () => {
// //   console.log("Body got Rendered");

// //   const [listOfRestaurants, setListOfRestaurants] = useState([]);
// //   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
// //   const [searchText, setSearchText] = useState("");

// //   const onlineStatus = useOnlineStatus();
// //   if (!onlineStatus) return <h1>🔴 Looks like you are Offline</h1>;

// //   useEffect(() => {
// //     fetchRestaurants();
// //   }, []);

// //   const fetchRestaurants = async () => {
// //     try {
// //       const response = await fetch(FOODAPP_URL);
// //       console.log("Fetching from:", FOODAPP_URL);

// //       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

// //       const json = await response.json();

// //       const restaurantList =
// //         json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

// //       if (Array.isArray(restaurantList)) {
// //         setListOfRestaurants(restaurantList);
// //         setFilteredRestaurants(restaurantList);
// //       } else {
// //         console.warn("Unexpected restaurant data:", restaurantList);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching restaurants:", error);
// //     }
// //   };

// //   const filterTopRated = () => {
// //     const filtered = listOfRestaurants.filter(
// //       (res) => parseFloat(res.info?.avgRating) >= 4.5
// //     );
// //     setFilteredRestaurants(filtered);
// //   };

// //   const handleSearch = () => {
// //     const filtered = listOfRestaurants.filter((res) =>
// //       res.info.name.toLowerCase().includes(searchText.toLowerCase())
// //     );
// //     setFilteredRestaurants(filtered);
// //   };

// //   return listOfRestaurants.length === 0 ? (
// //     <Shimmer />
// //   ) : (
// //     <div className="bg-gray-100 min-h-screen px-6 py-4">
// //       {/* 🔍 Search & Filter Controls */}
// //       <div className="flex flex-wrap items-center gap-4 mb-6">
// //         <input
// //           type="text"
// //           className="border border-gray-700 p-2 rounded-md"
// //           value={searchText}
// //           onChange={(e) => setSearchText(e.target.value)}
// //           placeholder="Search restaurants..."
// //         />
// //         <button
// //           className="bg-green-300 px-4 py-2 rounded-md border border-gray-700"
// //           onClick={handleSearch}
// //         >
// //           Search
// //         </button>
// //         <button
// //           className="bg-gray-200 px-4 py-2 rounded-md border border-gray-700"
// //           onClick={filterTopRated}
// //         >
// //           Top Rated Restaurants
// //         </button>
// //       </div>

// //       {/* 🍽 Restaurant Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {filteredRestaurants.map((restaurant) => (
// //           <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
// //             <RestaurantCards resData={restaurant.info} />
// //           </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Body;







// // import React, { useEffect, useState } from "react";
// // import RestaurantCards from "./RestaurantCards";
// // import Shimmer from "./Shimmer";
// // import { FOODAPP_URL } from "../utils.js/constants";
// // import { Link } from "react-router-dom";
// // import useOnlineStatus from "../utils.js/useOnlineStatus";

// // const Body = () => {
// //   const [listOfRestaurants, setListOfRestaurants] = useState([]);
// //   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
// //   const [searchText, setSearchText] = useState("");

// //   const onlineStatus = useOnlineStatus();

// //   useEffect(() => {
// //     fetchRestaurants();
// //   }, []);

// //   const fetchRestaurants = async () => {
// //     try {
// //       const response = await fetch(FOODAPP_URL);
// //       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

// //       const json = await response.json();

// //       const restaurantList =
// //         json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

// //       if (Array.isArray(restaurantList)) {
// //         setListOfRestaurants(restaurantList);
// //         setFilteredRestaurants(restaurantList);
// //       } else {
// //         console.warn("Unexpected restaurant data:", restaurantList);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching restaurants:", error);
// //     }
// //   };

// //   const filterTopRated = () => {
// //     const filtered = listOfRestaurants.filter(
// //       (res) => parseFloat(res.info?.avgRating) >= 4.5
// //     );
// //     setFilteredRestaurants(filtered);
// //   };

// //   const handleSearch = () => {
// //     const filtered = listOfRestaurants.filter((res) =>
// //       res.info.name.toLowerCase().includes(searchText.toLowerCase())
// //     );
// //     setFilteredRestaurants(filtered);
// //   };

// //   if (!onlineStatus) return <h1>🔴 Looks like you are Offline</h1>;

// //   return listOfRestaurants.length === 0 ? (
// //     <Shimmer />
// //   ) : (
// //     <div className="bg-gray-100 min-h-screen px-6 py-4">
// //       {/* 🔍 Search & Filter Controls */}
// //       <div className="flex flex-wrap items-center gap-4 mb-6">
// //         <input
// //           type="text"
// //           className="border border-gray-700 p-2 rounded-md"
// //           value={searchText}
// //           onChange={(e) => setSearchText(e.target.value)}
// //           placeholder="Search restaurants..."
// //         />
// //         <button
// //           className="bg-green-300 px-4 py-2 rounded-md border border-gray-700"
// //           onClick={handleSearch}
// //         >
// //           Search
// //         </button>
// //         <button
// //           className="bg-gray-200 px-4 py-2 rounded-md border border-gray-700"
// //           onClick={filterTopRated}
// //         >
// //           Top Rated Restaurants
// //         </button>
// //       </div>

// //       {/* 🍽 Restaurant Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {filteredRestaurants.map((restaurant) => (
// //           <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
// //             <RestaurantCards resData={restaurant.info} />
// //           </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Body;


// This is my corrected Body








// // import React from "react";
// // import '../index.css';
// // import { lazy, Suspense } from "react";
// // import ReactDOM from "react-dom/client";
// // import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// // import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
// // import Header from "./Components/Header";
// // import Body from "./Components/Body";
// // import Footer from "./Components/Footer";
// // import Shimmer from "./Components/Shimmer";
// // import About from "./Components/About";
// // import ContactUs from "./Components/ContactUs";
// // import Error from "./Components/Error";
// // import RestaurantMenu from "./Components/ReataurantMenu";
// // import { Provider } from "react-redux";
// // import appStore from "./utils.js/appStore";
// // import Cart from "./Components/Cart";

// // // Lazy load Grocery component for code splitting
// // const Grocery = lazy(() => import("./Components/Grocery"));

// // // Layout component with header and footer shared among routes
// // const FinalApp = () => (
// //   <Provider store={appStore}>
// //     <div>
// //       <Header />
// //       <Outlet />
// //       <Footer />
// //     </div>
// //     </Provider>
// //   ); 

// // // Router setup with nested routes
// // const appRouter = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <FinalApp />,
// //     errorElement: <Error />,
// //     children: [
// //       { path: "/", element: <Body /> },
// //       { path: "about", element: <About /> },
// //       { path: "cart", element: <Cart /> },
// //       { path: "contact", element: <ContactUs /> },
// //       {
// //   path: "/cart",
// //   element: <Cart />,
// // },
// //       {
// //         path: "grocery",
// //         element: (
// //           <Suspense fallback={<Shimmer />}>
// //             <Grocery />
// //           </Suspense>
// //         ),
// //       },
// //       { path: "restaurant/:resId", 
// //         element: <RestaurantMenu /> },
      
// //     ],
// //   },
// // ]);

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(< RouterProvider router={appRouter} />);









// // import React from "react";
// // import '../index.css';
// // import { lazy, Suspense } from "react";
// // import ReactDOM from "react-dom/client";
// // import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// // import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
// // import Header from "./Components/Header";
// // import Body from "./Components/Body";
// // import Footer from "./Components/Footer";
// // import Shimmer from "./Components/Shimmer";
// // import About from "./Components/About";
// // import ContactUs from "./Components/ContactUs";
// // import Error from "./Components/Error";
// // import RestaurantMenu from "./Components/ReataurantMenu";
// // import { Provider} from "react-redux";
// // import appStore from "./utils.js/appStore";
// // import Cart from "./Components/Cart";
// // import { CartProvider } from "./context/CartContext";

// // // Lazy load Grocery component for code splitting
// // const Grocery = lazy(() => import("./Components/Grocery"));

// // const FinalApp = () => (
// //   <Provider store={appStore}>
// //     <CartProvider>
// //       <div>
// //         <Header />
// //         <Outlet />
// //         <Footer />
// //       </div>
// //     </CartProvider>
// //   </Provider>
// // );

// // const appRouter = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <FinalApp />,
// //     errorElement: <Error />,
// //     children: [
// //       { path: "/", element: <Body /> },
// //       { path: "about", element: <About /> },
// //       { path: "cart", element: <Cart /> },
// //       { path: "contact", element: <ContactUs /> },
// //       {
// //         path: "grocery",
// //         element: (
// //           <Suspense fallback={<Shimmer />}>
// //             <Grocery />
// //           </Suspense>
// //         ),
// //       },
// //       {
// //         path: "restaurant/:resId",
// //         element: <RestaurantMenu />,
// //       },
// //     ],
// //   },
// // ]);

// corrected











// // import React from "react";
// // import ReactDOM from "react-dom/client"
// // import { useParams } from "react-router-dom"; // ✅ Corrected import
// // import Shimmer from "./Shimmer";
// // import useRestaurantMenu from "../useRestaurantMenu";

// // const RestaurantMenu = () => {
// //   const { resId } = useParams();
// //   const resInfo = useRestaurantMenu(resId);

// //   if (resInfo === null) return <Shimmer />;

// //   const restaurantInfo = resInfo?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info;
// //   const { id, name, cuisines, costForTwoMessage } = restaurantInfo || {};
// //   // console.log("Regular Cards:", regularCards);

// //   const regularCards = resInfo?.cards?.find(
// //     (c) => c?.groupCard?.cardGroupMap?.REGULAR
// //   )?.groupCard?.cardGroupMap?.REGULAR?.cards;

// //   // const menuCard = regularCards?.find((c) => c?.card?.card?.itemCards)?.card?.card;
// //   // const itemCards = menuCard?.itemCards || [];

  
// //   const itemCards = regularCards
// //   ?.filter((c) => c?.card?.card?.itemCards)
// //   ?.flatMap((c) => c.card.card.itemCards) || [];


// //   return (
// //     <div className="menu flex flex-wrap justify-evenly">
// //       <h1>{name} (ID: {id})</h1>
// //       <h2>{cuisines?.join(", ")}</h2>
// //       <h3>{costForTwoMessage}</h3>

// //       <h2>Menu</h2>
// //       <ul>
// //         {itemCards.map((item) => (
// //           <li key={item.card.info.id}>
// //             {item.card.info.name} - ₹
// //             {(item.card.info.defaultPrice || item.card.info.price) / 100}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };
// // console.log("Regular Cards:", regularCards);

// // export default RestaurantMenu;












// // import React from "react";
// // import { useParams } from "react-router-dom";
// // import Shimmer from "./Shimmer";
// // import useRestaurantMenu from "../useRestaurantMenu";

// // const RestaurantMenu = () => {
// //   const { resId } = useParams();
// //   const resInfo = useRestaurantMenu(resId);

// //   if (!resInfo) return <Shimmer />;

// //   const restaurantInfo = resInfo?.cards?.find(
// //     (c) => c?.card?.card?.info
// //   )?.card?.card?.info;

// //   const { id, name, cuisines, costForTwoMessage } = restaurantInfo || {};

// //   const regularCards = resInfo?.cards?.find(
// //     (c) => c?.groupCard?.cardGroupMap?.REGULAR
// //   )?.groupCard?.cardGroupMap?.REGULAR?.cards;

// //   return (
// //     <div className="menu px-8 py-4">
// //       <h1 className="text-2xl font-bold">{name} (ID: {id})</h1>
// //       <h2 className="text-lg">{cuisines?.join(", ")}</h2>
// //       <h3 className="text-md text-gray-600">{costForTwoMessage}</h3>

// //       <h2 className="mt-6 mb-2 text-xl font-semibold underline">Menu</h2>

// //       {regularCards?.map((card, index) => {
// //         const section = card?.card?.card;

// //         if (!section?.itemCards) return null;

// //         return (
// //           <div key={index} className="mb-6">
// //             <h3 className="font-bold text-lg mb-2">{section.title || "Items"}</h3>
// //             <ul className="list-disc list-inside">
// //               {section.itemCards.map((item) => {
// //                 const info = item?.card?.info;
// //                 if (!info) return null;

// //                 const price = (info.defaultPrice || info.price || 0) / 100;

// //                 return (
// //                   <li key={info.id} className="mb-1">
// //                     {info.name} – ₹{price}
// //                   </li>
// //                 );
// //               })}
// //             </ul>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default RestaurantMenu;







// // import React from "react";
// // import { useParams } from "react-router-dom";
// // import Shimmer from "./Shimmer";
// // import useRestaurantMenu from "../useRestaurantMenu";

// // const RestaurantMenu = () => {
// //   const { resId } = useParams();
// //   const resInfo = useRestaurantMenu(resId);

// //   if (!resInfo) return <Shimmer />;

// //   // const restaurantInfo = resInfo?.cards?.find(
// //   //   (c) => c?.card?.card?.info
// //   // )?.card?.card?.info;

// //   const { id, name, cuisines, costForTwoMessage } = 
// //   resInfo?.cards[0]?.card?.card?.info;

// //   const{itemCards} = 
// //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
// //   console.log(itemCards)
// //   // Helper function to extract iems from various card types
// //   const extractItems = (cards) => {
// //     const items = [];

// //     cards?.forEach((card) => {
// //       const section = card?.card?.card;

// //       // Direct itemCards
// //       if (section?.itemCards) {
// //         items.push({
// //           title: section.title || "Items",
// //           items: section.itemCards.map((item) => item.card.info),
// //         });
// //       }

// //       // Nested itemCards
// //       else if (section?.categories) {
// //         section.categories.forEach((category) => {
// //           if (category?.itemCards) {
// //             items.push({
// //               title: category.title || "Items",
// //               items: category.itemCards.map((item) => item.card.info),
// //             });
// //           }
// //         });
// //       }

// //       // Nested itemCards in nestedItemCards
// //       else if (section?.nestedItemCards) {
// //         section.nestedItemCards.forEach((nestedCard) => {
// //           if (nestedCard?.itemCards) {
// //             items.push({
// //               title: nestedCard.title || "Items",
// //               items: nestedCard.itemCards.map((item) => item.card.info),
// //             });
// //           }
// //         });
// //       }
// //     });

// //     return items;
// //   };

// //   const menuSections = extractItems(regularCards);

// //   return (
// //     <div className="menu px-8 py-4">
// //       <h1 className="text-2xl font-bold">
// //         {name} (ID: {id})
// //       </h1>
// //       <h2 className="text-lg">{cuisines?.join(", ")}</h2>
// //       <h3 className="text-md text-gray-600">{costForTwoMessage}</h3>

// //       <h2 className="mt-6 mb-2 text-xl font-semibold underline">Menu</h2>

// //       {menuSections.map((section, index) => (
// //         <div key={index} className="mb-6">
// //           <h3 className="font-bold text-lg mb-2">{section.title}</h3>
// //           <ul className="list-disc list-inside">
// //             {section.items.map((item) => {
// //               const price = (item.defaultPrice || item.price || 0) / 100;
// //               return (
// //                 <li key={item.id} className="mb-1">
// //                   {item.name} – ₹{price}
// //                 </li>
// //               );
// //             })}
// //           </ul>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default RestaurantMenu;


















// // import React from "react";
// // import { useParams } from "react-router-dom";
// // import Shimmer from "./Shimmer";
// // import useRestaurantMenu from "../useRestaurantMenu";

// // const RestaurantMenu = () => {
// //   const { resId } = useParams();
// //   const resInfo = useRestaurantMenu(resId);

// //   if (!resInfo) return <Shimmer />;

// //   // Extract restaurant basic info
// //   const restaurantInfo =
// //     resInfo?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info;

// //   const { id, name, cuisines, costForTwoMessage } = restaurantInfo || {};

// //   // Extract the full REGULAR cards  section
// //   const regularCards =
// //     resInfo?.cards?.find(
// //       (c) => c?.groupedCard?.cardGroupMap?.REGULAR
// //     )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

// //   // ✅ console.log helps debug if cards exist
// //   console.log("Regular Menu Cards:", regularCards);

// //   // Extract all menu sections
// //   const extractItems = (cards) => {
// //     const items = []; 

// //     cards?.forEach((card) => {
// //       const section = card?.card?.card;

// //       // Direct itemCards
// //       if (section?.itemCards) {
// //         items.push({
// //           title: section.title || "Items",
// //           items: section.itemCards.map((item) => item.card.info),
// //         });
// //       }

// //       // Nested itemCards under categories
// //       else if (section?.categories) {
// //         section.categories.forEach((category) => {
// //           if (category?.itemCards) {
// //             items.push({
// //               title: category.title || "Items",
// //               items: category.itemCards.map((item) => item.card.info),
// //             });
// //           }
// //         });
// //       }

// //       // Nested itemCards under nestedItemCards
// //       else if (section?.nestedItemCards) {
// //         section.nestedItemCards.forEach((nestedCard) => {
// //           if (nestedCard?.itemCards) {
// //             items.push({
// //               title: nestedCard.title || "Items",
// //               items: nestedCard.itemCards.map((item) => item.card.info),
// //             });
// //           }
// //         });
// //       }
// //     });

// //     return items;
// //   };

// //   const menuSections = extractItems(regularCards);

// //   return (
// //     <div className="menu px-8 py-4">
// //       <h1 className="text-2xl font-bold">
// //         {name} (ID: {id})
// //       </h1>
// //       <h2 className="text-lg">{cuisines?.join(", ")}</h2>
// //       <h3 className="text-md text-gray-600">{costForTwoMessage}</h3>

// //       <h2 className="mt-6 mb-2 text-xl font-semibold underline">Menu</h2>

// //       {menuSections.map((section, index) => (
// //         <div key={index} className="mb-6">
// //           <h3 className="font-bold text-lg mb-2">{section.title}</h3>
// //           <ul className="list-disc list-inside">
// //             {section.items.map((item) => {
// //               const price = (item.defaultPrice || item.price || 0) / 100;
// //               return (
// //                 <li key={item.id} className="mb-1">
// //                   {item.name} – ₹{price}
// //                 </li>
// //               );
// //             })}
// //           </ul>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default RestaurantMenu;
















// // import React, { useState } from "react";
// // import { useParams } from "react-router-dom";
// // import Shimmer from "./Shimmer";
// // import useRestaurantMenu from "../useRestaurantMenu";

// // const RestaurantMenu = () => {
// //   const { resId } = useParams();
// //   const resInfo = useRestaurantMenu(resId);

// //   if (!resInfo) return <Shimmer />;

// //   const restaurantInfo =
// //     resInfo?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info;

// //   const { id, name, cuisines, costForTwoMessage } = restaurantInfo || {};

// //   const regularCards =
// //     resInfo?.cards?.find(
// //       (c) => c?.groupedCard?.cardGroupMap?.REGULAR
// //     )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

// //   const extractItems = (cards) => {
// //     const items = [];

// //     cards?.forEach((card) => {
// //       const section = card?.card?.card;

// //       if (section?.itemCards) {
// //         items.push({
// //           title: section.title || "Items",
// //           items: section.itemCards.map((item) => item.card.info),
// //         });
// //       } else if (section?.categories) {
// //         section.categories.forEach((category) => {
// //           if (category?.itemCards) {
// //             items.push({
// //               title: category.title || "Items",
// //               items: category.itemCards.map((item) => item.card.info),
// //             });
// //           }
// //         });
// //       } else if (section?.nestedItemCards) {
// //         section.nestedItemCards.forEach((nestedCard) => {
// //           if (nestedCard?.itemCards) {
// //             items.push({
// //               title: nestedCard.title || "Items",
// //               items: nestedCard.itemCards.map((item) => item.card.info),
// //             });
// //           }
// //         });
// //       }
// //     });

// //     return items;
// //   };

// //   const menuSections = extractItems(regularCards);

// //   // State to toggle accordion sections
// //   const [openSectionIndex, setOpenSectionIndex] = useState(null);

// //   const toggleSection = (index) => {
// //     setOpenSectionIndex(openSectionIndex === index ? null : index);
// //   };

// //   return (
// //     <div className="menu px-8 py-4">
// //       <h1 className="text-2xl font-bold">{name} (ID: {id})</h1>
// //       <h2 className="text-lg">{cuisines?.join(", ")}</h2>
// //       <h3 className="text-md text-gray-600">{costForTwoMessage}</h3>

// //       <h2 className="mt-6 mb-2 text-xl font-semibold underline">Menu</h2>

// //       {menuSections.map((section, index) => (
// //         <div key={index} className="mb-4 border rounded">
// //           <button
// //             className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
// //             onClick={() => toggleSection(index)}
// //           >
// //             {section.title}
// //           </button>
// //           {openSectionIndex === index && (
// //             <div className="px-6 py-3 bg-white">
// //               <ul className="list-disc list-inside">
// //                 {section.items.map((item) => {
// //                   const price = (item.defaultPrice || item.price || 0) / 100;
// //                   return (
// //                     <li key={item.id} className="mb-1">
// //                       {item.name} – ₹{price}
// //                     </li>
// //                   );
// //                 })}
// //               </ul>
// //             </div>
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default RestaurantMenu;













// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import Shimmer from "./Shimmer";
// import useRestaurantMenu from "../useRestaurantMenu";
// import RestaurantCards from "./RestaurantCards";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);
//   const [openSectionIndex, setOpenSectionIndex] = useState(null);

//   if (!resInfo) return <Shimmer />;

//   const restaurantInfo =
//     resInfo?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info;

//   const { id, name, cuisines, costForTwoMessage } = restaurantInfo || {};

//   const regularCards =
//     resInfo?.cards?.find(
//       (c) => c?.groupedCard?.cardGroupMap?.REGULAR
//     )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

//   const extractItems = (cards) => {
//     const items = [];

//     cards?.forEach((card) => {
//       const section = card?.card?.card;

//       if (section?.itemCards) {
//         items.push({
//           title: section.title || "Items",
//           items: section.itemCards.map((item) => item.card.info),
//         });
//       } else if (section?.categories) {
//         section.categories.forEach((category) => {
//           if (category?.itemCards) {
//             items.push({
//               title: category.title || "Items",
//               items: category.itemCards.map((item) => item.card.info),
//             });
//           }
//         });
//       }
//     });

//     return items;
//   };

//   const menuSections = extractItems(regularCards);

//   const toggleSection = (index) => {
//     setOpenSectionIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <div className="menu px-8 py-4">
//       <h1 className="text-2xl font-bold">{name} (ID: {id})</h1>
//       <h2 className="text-lg">{cuisines?.join(", ")}</h2>
//       <h3 className="text-md text-gray-600">{costForTwoMessage}</h3>

//       <h2 className="mt-6 mb-2 text-xl font-semibold underline">Menu</h2>

//       {menuSections.map((section, index) => (
//         <div key={index} className="mb-4 border rounded">
//           <button
//             className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
//             onClick={() => toggleSection(index)}
//           >
//             {section.title}
//           </button>

//           {openSectionIndex === index && (
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 py-3 bg-white">
//               {section.items.map((item) => (
//                 // <RestaurantCards key={item.id} resData={{ info: item }} />
//                 <RestaurantCards key={item.id} resData={item} />
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;











// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import Shimmer from "./Shimmer";
// import useRestaurantMenu from "../useRestaurantMenu";
// import RestaurantCards from "./RestaurantCards";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);
//   const [openSectionIndex, setOpenSectionIndex] = useState(null);

//   if (!resInfo) return <Shimmer />;

//   const restaurantInfo =
//     resInfo?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info;

//   const { id, name, cuisines, costForTwoMessage } = restaurantInfo || {};

//   const regularCards =
//     resInfo?.cards?.find(
//       (c) => c?.groupedCard?.cardGroupMap?.REGULAR
//     )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

//   const extractItems = (cards) => {
//     const items = [];

//     cards?.forEach((card) => {
//       const section = card?.card?.card;

//       if (section?.itemCards) {
//         items.push({
//           title: section.title || "Items",
//           items: section.itemCards.map((item) => item.card.info),
//         });
//       } else if (section?.categories) {
//         section.categories.forEach((category) => {
//           if (category?.itemCards) {
//             items.push({
//               title: category.title || "Items",
//               items: category.itemCards.map((item) => item.card.info),
//             });
//           }
//         });
//       }
//     });

//     return items;
//   };

//   const menuSections = extractItems(regularCards);

//   const toggleSection = (index) => {
//     setOpenSectionIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <div className="menu px-8 py-4">
//       <h1 className="text-2xl font-bold">{name} (ID: {id})</h1>
//       <h2 className="text-lg">{cuisines?.join(", ")}</h2>
//       <h3 className="text-md text-gray-600">{costForTwoMessage}</h3>

//       <h2 className="mt-6 mb-2 text-xl font-semibold underline">Menu</h2>

//       {menuSections.map((section, index) => (
//         <div key={index} className="mb-4 border rounded">
//           <button
//             className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
//             onClick={() => toggleSection(index)}
//           >
//             {section.title}
//           </button>

//           {openSectionIndex === index && (
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 py-3 bg-white">
//               {section.items.map((item) => (
//                 <RestaurantCards key={item.id} resData={item} />
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;













// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import Shimmer from "./Shimmer";
// import useRestaurantMenu from "../utils.js/useRestaurantMenu";
// import RestaurantCards from "./RestaurantCards";
// import { addItem } from "../utils.js/cartSlice";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);
//   const [openSectionIndex, setOpenSectionIndex] = useState(null);

//   // Cart state to hold added menu items
//   const [cart, setCart] = useState([]);

//   if (!resInfo) return <Shimmer />;

//   const restaurantInfo =
//     resInfo?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info;

//   const { id, name, cuisines, costForTwoMessage } = restaurantInfo || {};

//   const regularCards =
//     resInfo?.cards?.find(
//       (c) => c?.groupedCard?.cardGroupMap?.REGULAR
//     )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

//   const extractItems = (cards) => {
//     const items = [];

//     cards?.forEach((card) => {
//       const section = card?.card?.card;

//       if (section?.itemCards) {
//         items.push({
//           title: section.title || "Items",
//           items: section.itemCards.map((item) => item.card.info),
//         });
//       } else if (section?.categories) {
//         section.categories.forEach((category) => {
//           if (category?.itemCards) {
//             items.push({
//               title: category.title || "Items",
//               items: category.itemCards.map((item) => item.card.info),
//             });
//           }
//         });
//       }
//     });

//     return items;
//   };

//   const menuSections = extractItems(regularCards);

//   const toggleSection = (index) => {
//     setOpenSectionIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   // Add item to cart handler
//   const handleAddToCart = (item) => {
//     // setCart((prevCart) => [...prevCart, item]);
//     // console.log("Added to cart:", item);
//     dispatch(addItem(item))//this will create an object and pass it as a second object in cartSlice
     
//   };

//   return (
//     <div className="menu px-8 py-4">
//       <h1 className="text-2xl font-bold">{name} (ID: {id})</h1>
//       <h2 className="text-lg">{cuisines?.join(", ")}</h2>
//       <h3 className="text-md text-gray-600">{costForTwoMessage}</h3>
//       <h2 className="mt-6 mb-2 text-xl font-semibold underline">Menu</h2>
//       {menuSections.map((section, index) => (
//         <div key={index} className="mb-4 border rounded">
//           <button
//             className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
//             onClick={() => toggleSection(index)}
//           >
//             {section.title}
//           </button>
//           {openSectionIndex === index && (
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 py-3 bg-white">
//               {section.items.map((item) => (
//                 <RestaurantCards
//                   key={item.id}
//                   resData={item}
//                   onAdd={ () => {handleAddToCart(item)} }// pass onAdd handler here
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//       {/* Optional: Display cart items for debugging */}
//       <div className="mt-8 border p-4 rounded bg-gray-50">
//         <h3 className="font-semibold mb-2">Cart Items ({cart.length})</h3>
//         {cart.length === 0 ? (
//           <p>No items added yet.</p>
//         ) : (
//           <ul className="list-disc list-inside">
//             {cart.map((item, idx) => (
//               <li key={idx}>{item.name}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };
// export default RestaurantMenu;




























// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import Shimmer from "./Shimmer";
// import useRestaurantMenu from "../utils.js/useRestaurantMenu";
// import RestaurantCards from "./RestaurantCards";
// import { useDispatch, useSelector } from "react-redux";
// import { addItem } from "../utils.js/cartSlice";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);
//   const [openSectionIndex, setOpenSectionIndex] = useState(null);

//   const dispatch = useDispatch();
//   const cart = useSelector((store) => store.cart.items); // get cart from Redux store

//   if (!resInfo) return <Shimmer />;

//   const restaurantInfo =
//     resInfo?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info;

//   const { id, name, cuisines, costForTwoMessage } = restaurantInfo || {};

//   const regularCards =
//     resInfo?.cards?.find(
//       (c) => c?.groupedCard?.cardGroupMap?.REGULAR
//     )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

//   const extractItems = (cards) => {
//     const items = [];

//     cards?.forEach((card) => {
//       const section = card?.card?.card;

//       if (section?.itemCards) {
//         items.push({
//           title: section.title || "Items",
//           items: section.itemCards.map((item) => item.card.info),
//         });
//       } else if (section?.categories) {
//         section.categories.forEach((category) => {
//           if (category?.itemCards) {
//             items.push({
//               title: category.title || "Items",
//               items: category.itemCards.map((item) => item.card.info),
//             });
//           }
//         });
//       }
//     });

//     return items;
//   };

//   const menuSections = extractItems(regularCards);

//   const toggleSection = (index) => {
//     setOpenSectionIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const handleAddToCart = (item) => {
//     dispatch(addItem(item));
//     // Optional: you can add a notification or toast here
//   };

//   return (
//     <div className="menu px-8 py-4">
//       <h1 className="text-2xl font-bold">{name} (ID: {id})</h1>
//       <h2 className="text-lg">{cuisines?.join(", ")}</h2>
//       <h3 className="text-md text-gray-600">{costForTwoMessage}</h3>
//       <h2 className="mt-6 mb-2 text-xl font-semibold underline">Menu</h2>
//       {menuSections.map((section, index) => (
//         <div key={index} className="mb-4 border rounded">
//           <button
//             className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
//             onClick={() => toggleSection(index)}
//           >
//             {section.title}
//           </button>
//           {openSectionIndex === index && (
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 py-3 bg-white">
//               {section.items.map((item) => (
//                 <RestaurantCards
//                   key={item.id}
//                   resData={item}
//                   onAdd={() => handleAddToCart(item)}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       ))}

//       <div className="mt-8 border p-4 rounded bg-gray-50">
//         <h3 className="font-semibold mb-2">Cart Items ({cart.length})</h3>
//         {cart.length === 0 ? (
//           <p>No items added yet.</p>
//         ) : (
//           <ul className="list-disc list-inside">
//             {cart.map((item, idx) => (
//               <li key={idx}>{item.name}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;
















// import { IMG_CDN_URL } from "../constants";

// const RestaurantCards = (props) => {
//     const { resData } = props ;
//     if (!resData) return null;
//     const {cloudinaryImageId, name, cuisines, deliveryTime, avgRating, costForTwo } = resData;

//     // Destructuriing obj 
//     return(

//         <div className= "m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:to-blue-500">

//            <div className="individual-cards">
//               <img 
//                className="rounded-lg"
//                alt="Food Shop"
//                src={ IMG_CDN_URL + cloudinaryImageId}/>
//               <h4 className="font-bold py-2 text-lg">{name}</h4>
//               <h5 className="font-semibold">{cuisines.join(", ")}</h5> 
//               <h6 className="font-semibold">{deliveryTime}minutes</h6>
//               <h5 className="font-semibold">{avgRating}stars</h5>
//               <h6 className="font-semibold">{costForTwo}</h6>
//            </div>
//         </div>
//     )
// }

// export default RestaurantCards;






// import React from "react";
// import { IMG_CDN_URL } from "../constants";

// const RestaurantCards = ({ resData }) => {
//   if (!resData) return null;

//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     deliveryTime,
//     avgRating,
//     costForTwo,
//   } = resData.info;

// // m-4 p-4 rounded-lg bg-gray-100 hover:bg-blue-500 transition duration-300 ease-in-out cursor-pointer
//   return (
//     <div className="border-2 border-solid border-brandBlack">
//       <div className="individual-cards  w-[200px] ">
//         <img
//           className="rounded-lg w-[195px]"
//           alt="Food Shop"
//           src={IMG_CDN_URL + cloudinaryImageId}
//         />
//         <h4 className="font-bold py-2 text-lg">{name}</h4>
//         <h5 className="font-semibold">{cuisines?.join(", ")}</h5>
//         <h6 className="font-semibold">{deliveryTime} minutes</h6>
//         <h5 className="font-semibold">{avgRating} stars</h5>
//         <h6 className="font-semibold">{costForTwo}</h6>
//       </div>
//     </div>
//   );
// };

// // Higher Order Component 

// // export const withPromotedLabel = (RestaurantCards) => {
// //   return (props) => {
// //     return (
// //       <div>
// //       <label className="absolute bg-blend-black text-white m-2 p-2 rounded-lg ">
// //         Promoted
// //         </label>
// //       <RestaurantCards {...props} />
// //       </div>

      
// //     )
// //   } 
// // }

// export const withPromotedLabel = (RestaurantCards) => {
//   return (props) => {
//     return (
//       <div className="relative w-fit"> {/* Add relative positioning */}
//         <label className="absolute bg-black text-white m-2 p-2 rounded-lg text-sm">
//           Promoted
//         </label>
//         <RestaurantCards {...props} />
//       </div>
//     );
//   };
// };



// export default RestaurantCards;












// import React from "react";
// import { IMG_CDN_URL } from "../constants";

// // Reusable card for individual food menu items
// const RestaurantCards = ({ resData }) => {
//   if (!resData) return null;

//   const {
//     imageId,
//     name,
//     description,
//     price,
//     defaultPrice,
//     ratings,
//   } = resData;

//   const finalPrice = (price || defaultPrice || 0) / 100;

//   return (
//     <div className="border rounded-lg shadow-sm p-3 bg-gray-50 hover:shadow-md transition">
//       <div className="flex flex-col items-start gap-2">
//         {imageId && (
//           <img
//             src={IMG_CDN_URL + imageId}
//             alt={name}
//             className="w-full h-32 object-cover rounded"
//           />
//         )}
//         <h4 className="font-bold text-base">{name}</h4>
//         <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
//         <p className="text-sm font-semibold text-green-700">₹{finalPrice}</p>
//         {ratings?.aggregatedRating?.rating && (
//           <span className="text-yellow-500 text-sm">
//             ⭐ {ratings.aggregatedRating.rating}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// export const withPromotedLabel = (RestaurantCards) => {
//   return (props) => (
//     <div className="relative w-fit">
//       <label className="absolute bg-black text-white m-2 p-2 rounded-lg text-xs">
//         Promoted
//       </label>
//       <RestaurantCards {...props} />
//     </div>
//   );
// };

// export default RestaurantCards;







// import React from "react";
// import { IMG_CDN_URL } from "../constants";

// const RestaurantCards = ({ resData }) => {
//   if (!resData) return null;

//   const {
//     imageId,
//     name,
//     description,
//     price,
//     defaultPrice,
//     ratings,
//   } = resData;

//   const finalPrice = (price || defaultPrice || 0) / 100;

//   return (
//     <div className="border rounded-lg shadow-sm p-3 bg-gray-50 hover:shadow-md transition w-full h-full">
//       <div className="flex flex-col items-start gap-2">
//         {imageId && (
//           <img
//             src={IMG_CDN_URL + imageId}
//             alt={name}
//             className="w-full h-32 object-cover rounded"
//           />
//         )}
//         <h4 className="font-bold text-base">{name}</h4>
//         {description && (
//           <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
//         )}
//         <p className="text-sm font-semibold text-green-700">₹{finalPrice}</p>
//         {ratings?.aggregatedRating?.rating && (
//           <span className="text-yellow-500 text-sm">
//             ⭐ {ratings.aggregatedRating.rating}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// export const withPromotedLabel = (RestaurantCards) => {
//   return (props) => (
//     <div className="relative w-fit">
//       <label className="absolute bg-black text-white m-2 p-2 rounded-lg text-xs">
//         Promoted
//       </label>
//       <RestaurantCards {...props} />
//     </div>
//   );
// };

// export default RestaurantCards;







// import React from "react";
// import { IMG_CDN_URL } from "../constants";

// const RestaurantCards = ({ resData }) => {
//   if (!resData) return null;

//   const {
//     imageId,
//     name,
//     description,
//     price,
//     defaultPrice,
//     ratings,
//   } = resData;

//   const finalPrice = (price || defaultPrice || 0) / 100;

//   return (
//     <div className="border rounded-lg shadow-sm p-3 bg-gray-50 hover:shadow-md transition w-full h-full">
//       <div className="flex flex-col items-start gap-2">
//         {imageId && (
//           <img
//             src={IMG_CDN_URL + imageId}
//             alt={name}
//             className="w-full h-32 object-cover rounded"
//           />
//         )}
//         <h4 className="font-bold text-base">{name}</h4>
//         {description && (
//           <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
//         )}
//         <p className="text-sm font-semibold text-green-700">₹{finalPrice}</p>
//         {ratings?.aggregatedRating?.rating && (
//           <span className="text-yellow-500 text-sm">
//             ⭐ {ratings.aggregatedRating.rating}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// export const withPromotedLabel = (RestaurantCards) => {
//   return (props) => (
//     <div className="relative w-fit">
//       <label className="absolute bg-black text-white m-2 p-2 rounded-lg text-xs">
//         Promoted
//       </label>
//       <RestaurantCards {...props} />
//     </div>
//   );
// };

// export default RestaurantCards;









// const RestaurantCards = ({ resData }) => {
//   if (!resData) return null;

//   // Detect if this is a menu item or restaurant info by presence of price
//   const isMenuItem = resData?.price || resData?.defaultPrice;

//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     sla,
//     avgRating,
//     costForTwo,
//   } = resData || {};

//   const {
//     imageId,
//     description,
//     price,
//     defaultPrice,
//     ratings,
//   } = resData;

//   const finalPrice = (price || defaultPrice || 0) / 100;

//   return (
//     <div className="border rounded-lg shadow-sm p-3 bg-gray-50 hover:shadow-md transition w-full h-full">
//       <div className="flex flex-col items-start gap-2">
//         {isMenuItem ? (
//           <>
//             {imageId && (
//               <img
//                 src={IMG_CDN_URL + imageId}
//                 alt={name}
//                 className="w-full h-32 object-cover rounded"
//               />
//             )}
//             <h4 className="font-bold text-base">{name}</h4>
//             {description && (
//               <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
//             )}
//             <p className="text-sm font-semibold text-green-700">₹{finalPrice}</p>
//             {ratings?.aggregatedRating?.rating && (
//               <span className="text-yellow-500 text-sm">
//                 ⭐ {ratings.aggregatedRating.rating}
//               </span>
//             )}
//           </>
//         ) : (
//           <>
//             {cloudinaryImageId && (
//               <img
//                 src={IMG_CDN_URL + cloudinaryImageId}
//                 alt={name}
//                 className="w-full h-32 object-cover rounded"
//               />
//             )}
//             <h4 className="font-bold text-base">{name}</h4>
//             <p className="text-gray-600 text-sm line-clamp-2">
//               {cuisines?.join(", ")}
//             </p>
//             <p className="text-sm text-gray-500">₹{costForTwo / 100}</p>
//             <div className="text-sm text-gray-700 flex justify-between w-full">
//               <span>⭐ {avgRating}</span>
//               <span>{sla?.deliveryTime} mins</span>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };









// import React from "react";
// import { IMG_CDN_URL } from "../constants";

// const RestaurantCards = ({ resData }) => {
//   if (!resData) return null;

//   // Detect if this is a menu item or a restaurant info card
//   const isMenuItem = resData?.price || resData?.defaultPrice;

//   // For restaurant card data
//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     sla,
//     avgRating,
//     costForTwo,
//   } = resData || {};

//   // For menu item card data
//   const {
//     imageId,
//     description,
//     price,
//     defaultPrice,
//     ratings,
//   } = resData;

//   const finalPrice = (price || defaultPrice || 0) / 100;

//   return (
//     <div className="border rounded-lg shadow-sm p-3 bg-gray-50 hover:shadow-md transition w-full h-full">
//       <div className="flex flex-col items-start gap-2">
//         {isMenuItem ? (
//           <>
//             {imageId && (
//               <img
//                 src={IMG_CDN_URL + imageId}
//                 alt={name}
//                 className="w-full h-32 object-cover rounded"
//               />
//             )}
//             <h4 className="font-bold text-base">{name}</h4>
//             {description && (
//               <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
//             )}
//             <p className="text-sm font-semibold text-green-700">₹{finalPrice}</p>
//             {ratings?.aggregatedRating?.rating && (
//               <span className="text-yellow-500 text-sm">
//                 ⭐ {ratings.aggregatedRating.rating}
//               </span>
//             )}
//           </>
//         ) : (
//           <>
//             {cloudinaryImageId && (
//               <img
//                 src={IMG_CDN_URL + cloudinaryImageId}
//                 alt={name}
//                 className="w-full h-32 object-cover rounded"
//               />
//             )}
//             <h4 className="font-bold text-base">{name}</h4>
//             <p className="text-gray-600 text-sm line-clamp-2">
//               {cuisines?.join(", ")}
//             </p>
//             <p className="text-sm text-gray-500">₹{costForTwo / 100}</p>
//             <div className="text-sm text-gray-700 flex justify-between w-full">
//               <span>⭐ {avgRating}</span>
//               <span>{sla?.deliveryTime} mins</span>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RestaurantCards;




















// const RestaurantCards = ({ resData, onAdd }) => {
//   if (!resData) return null;

//   const isMenuItem = resData?.price || resData?.defaultPrice;

//   // ... existing destructuring and rendering ...

//   return (
//     <div className="border rounded-lg shadow-sm p-3 bg-gray-50 hover:shadow-md transition w-full h-full">
//       <div className="flex flex-col items-start gap-2">
//         {isMenuItem ? (
//           <>
//             {/* existing image, name, description, price, ratings */}
//             {imageId && (
//               <img
//                 src={IMG_CDN_URL + imageId}
//                 alt={name}
//                 className="w-full h-32 object-cover rounded"
//               />
//             )}
//             <h4 className="font-bold text-base">{name}</h4>
//             {description && (
//               <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
//             )}
//             <p className="text-sm font-semibold text-green-700">₹{finalPrice}</p>
//             {ratings?.aggregatedRating?.rating && (
//               <span className="text-yellow-500 text-sm">
//                 ⭐ {ratings.aggregatedRating.rating}
//               </span>
//             )}
//             {/* Add button */}
//             <button
//               className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//               onClick={() => onAdd(resData)}
//             >
//               Add
//             </button>
//           </>
//         ) : (
//           <>
//             {/* existing restaurant card UI */}
//             {cloudinaryImageId && (
//               <img
//                 src={IMG_CDN_URL + cloudinaryImageId}
//                 alt={name}
//                 className="w-full h-32 object-cover rounded"
//               />
//             )}
//             <h4 className="font-bold text-base">{name}</h4>
//             <p className="text-gray-600 text-sm line-clamp-2">
//               {cuisines?.join(", ")}
//             </p>
//             <p className="text-sm text-gray-500">₹{costForTwo / 100}</p>
//             <div className="text-sm text-gray-700 flex justify-between w-full">
//               <span>⭐ {avgRating}</span>
//               <span>{sla?.deliveryTime} mins</span>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RestaurantCards;

















// import React from "react";
// import { IMG_CDN_URL } from "../constants";

// const RestaurantCards = ({ resData }) => {
//   if (!resData) return null;

//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     sla,
//     avgRating,
//     costForTwo,
//   } = resData || {};

//   return (
//     <div className="border rounded-lg shadow-sm p-3 bg-gray-50 hover:shadow-md transition w-full h-full">
//       {cloudinaryImageId && (
//         <img
//           src={IMG_CDN_URL + cloudinaryImageId}
//           alt={name}
//           className="w-full h-32 object-cover rounded"
//         />
//       )}
//       <h4 className="font-bold text-base">{name}</h4>
//       <p className="text-gray-600 text-sm line-clamp-2">{cuisines?.join(", ")}</p>
//       <p className="text-sm text-gray-500">{costForTwo}</p>
//       <div className="text-sm text-gray-700 flex justify-between w-full">
//         <span>⭐ {avgRating}</span>
//         <span>{sla?.deliveryTime} mins</span>
//       </div>
//     </div>
//   );
// };

// export default RestaurantCards;










// import React from "react";
// import { IMG_CDN_URL } from "../constants";
// const RestaurantCards = ({ resData, onAdd }) => {
//   if (!resData) return null;

//   // Detect if this is a menu item or restaurant card
//   const isMenuItem = resData?.price || resData?.defaultPrice;

//   // Restaurant properties
//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     sla,
//     avgRating,
//     costForTwo,
//   } = resData;

//   // Menu item properties
//   const {
//     imageId,
//     description,
//     price,
//     defaultPrice,
//     ratings,
//   } = resData;

//   // Calculate price for menu items (in rupees)
//   const finalPrice = (price || defaultPrice) / 100;

//   return (
//     <div className="border rounded-lg shadow-sm p-3 bg-gray-50 hover:shadow-md transition w-full h-full">
//       {isMenuItem ? (
//         <>
//           {imageId && (
//             <img
//               src={IMG_CDN_URL + imageId}
//               alt={name}
//               className="w-full h-32 object-cover rounded"
//             />
//           )}
//           <h4 className="font-bold text-base">{name}</h4>
//           {description && (
//             <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
//           )}
//           <p className="text-sm font-semibold text-green-700">₹{finalPrice}</p>
//           {ratings?.aggregatedRating?.rating && (
//             <span className="text-yellow-500 text-sm">
//               ⭐ {ratings.aggregatedRating.rating}
//             </span>
//           )}
//           {/* Add button (if you want) */}
//           {onAdd && (
//             <button
//               className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//               onClick={() => onAdd(resData)}
//             >
//               Add
//             </button>
//           )}
//         </>
//       ) : (
//         <>
//           {cloudinaryImageId && (
//             <img
//               src={IMG_CDN_URL + cloudinaryImageId}
//               alt={name}
//               className="w-full h-32 object-cover rounded"
//             />
//           )}
//           <h4 className="font-bold text-base">{name}</h4>
//           <p className="text-gray-600 text-sm line-clamp-2">
//             {cuisines?.join(", ")}
//           </p>
//           <p className="text-sm text-gray-500">₹{costForTwo / 100}</p>
//           <div className="text-sm text-gray-700 flex justify-between w-full">
//             <span>⭐ {avgRating}</span>
//             <span>{sla?.deliveryTime} mins</span>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default RestaurantCards;







// import React, { useState } from "react";
// import { LOGO_URL } from "../constants";
// import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
// import useOnlineStatus from "../useOnlineStatus";

// const Header = () => {
//   const [buttonName, setButtonName] = useState("Login");
//   const onlineStatus = useOnlineStatus();

//   return (
//     <div className="flex justify-between shadow-lg bg-gray-500 mb-2 px-2">
//       <div className="logo-container">
//         <img className = "logo"
//          src={LOGO_URL} alt="Logo" />
//       </div>

//       <div className="flex items-center">
//         <ul className="flex items-center">
//           <li className="px-3">
//             Online Status: {onlineStatus ? "Green" : "Red"}
//           </li>
//           <li className="px-3">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="px-3">
//             <Link to="/about">About Us</Link>
//           </li>
//           <li className="px-3">
//             <Link to="/contact">Contact Us</Link>
//           </li>
//           <li className="px-3">
//             <Link to="/grocery">Grocery</Link>
//           </li>
//           <li className="px-3">
//             <Link to="/cart">Cart</Link>
//           </li>
//           <button
//             className="ml-4 px-3 py-1 bg-blue-600 text-white rounded"
//             onClick={() => {
//               buttonName === "Login"
//                 ? setButtonName("Logout")
//                 : setButtonName("Login");
//             }}
//           >
//             {buttonName}
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;















// import React, { useState } from "react";
// import { LOGO_URL } from "../utils.js/constants";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils.js/useOnlineStatus";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const [buttonName, setButtonName] = useState("Login");
//   const onlineStatus = useOnlineStatus();


// // Subscribing to the store using selector
// const cartItems = useSelector((store) => store.cart.items);


//   return (
//     <header className="flex justify-between items-center shadow-md bg-white px-6 py-4 mb-4 sticky top-0 z-50">
//       {/* Logo */}
//       <div className="w-32">
//         <img className="h-12 object-contain" src={LOGO_URL} alt="Logo" />
//       </div>

//       {/* Navigation */}
//       <nav className="flex items-center gap-6 text-gray-700 font-medium text-base">
//         <span className="text-sm">
//           Online Status:{" "}
//           <span className={onlineStatus ? "text-green-600" : "text-red-600"}>
//             {onlineStatus ? "🟢 Online" : "🔴 Offline"}
//           </span>
//         </span>
//         <Link className="hover:text-blue-600 transition" to="/">Home</Link>
//         <Link className="hover:text-blue-600 transition" to="/about">About</Link>
//         <Link className="hover:text-blue-600 transition" to="/contact">Contact</Link>
//         <Link className="hover:text-blue-600 transition" to="/grocery">Grocery</Link>
        
//         <li
//          className="hover:text-blue-600 transition">
//           <Link to="/cart">
//           Cart ({cartItems.length} items)
//           </Link>
//           </li>
//         <button
//           className="ml-2 px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           onClick={() => {
//             setButtonName((prev) => (prev === "Login" ? "Logout" : "Login"));
//           }}
//         >
//           {buttonName}
//         </button>
//       </nav>
//     </header>
//   );
// };

// export default Header;





// import UserClass from "./UserClass"
// import React from "react";
// // import User from "./User"
// // import {component} from "react"';

// class About extends React.Component{

//     constructor(){
//         super();
//         console.log("Parent constructor");
//     }

//     componentDidMount() {
//         // First the constructor called, second the render and then when the class based component is mounted the it is called 
//         console.log("Parent COmponent Did Mount")
//     }

//     render(){
//         console.log(  "Parent render");
//     return (
//         <div>
//         <UserClass name={"HP"} />
//         </div>
//     );
//   };
// };  
// export default About;






// const Grocery = ()=>{
//     return  (
//     <h1>
//         {" "}
//         sfbfsfnfnvsfg
//     </h1>
//     )
// }
// export default Grocery;





// // RAFCE creates new component immediately

// const ContactingUs = () => {
//     return (
//         <div>
//             <h1>This is my No.</h1>
//             <h2>+1 1325488215</h2>
//         </div>
//     )
// }

// export default ContactingUs;



// // import { useSelector } from "react-redux";
// // import RestaurantMenu from "./ReataurantMenu";
// // import { clearCart } from "../utils.js/cartSlice";
// // import { useDispatch } from "react-redux";


// // const Cart = () => {

// //     const dispatch = useDispatch();
// // const handleCLearCart = () => {
// //     dispatch(clearCart())
// // }

// //     const cartItems = useSelector((store) =>  store.cart.items)
// //     return(
// //         <div className="cartt">
// //             <button className="clearcart"
// //             onClick={handleCLearCart}>
// //                 ClearCart
// //             </button>
// //             <h1>Cart</h1>
// //             {cartItems.length == 0 && <h1>Cart item is empty add items</h1>}
// //             <RestaurantMenu items={cartItems}/>  
// //         </div>
// //     )
// // }

// // export default Cart;  















// // import { useSelector, useDispatch } from "react-redux";
// // import RestaurantMenu from "./RestaurantMenu";
// // import { clearCart } from "../utils.js/cartSlice";

// // const Cart = () => {
// //   const dispatch = useDispatch();

// //   const handleClearCart = () => {
// //     dispatch(clearCart());
// //   };

// //   const cartItems = useSelector((store) => store.cart.items);

// //   return (
// //     <div className="cartt">
// //       <button className="clearcart" onClick={handleClearCart}>
// //         Clear Cart
// //       </button>
// //       <h1>Cart</h1>
// //       {cartItems.length === 0 && <h1>Cart item is empty, add items</h1>}
// //       <RestaurantMenu items={cartItems} />
// //     </div>
// //   );
// // };

// // export default Cart;

// This is my corrected Cart Code







// const Footer = () => {
//     return (
//     <div className="h-[400px] w-[100%] bg-blue-950">
//         <h3>This is my footer </h3>
//     </div>
//     )
// }
// export default Footer;








// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prev) => [...prev, item]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);





// // const Cart = () => {
// //     return (
// //         <div>
// //             <h1>This is my Cart</h1>
// //         </div>
// //     )
// // }

// // export default Cart;

// export default Cart;


// import React from "react";
// import { useCart } from "../context/CartContext";

// const Cart = () => {
//   const { cartItems, removeFromCart, clearCart } = useCart();

//   if (cartItems.length === 0)
//     return <div className="p-4">Your cart is empty.</div>;

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">Your Cart</h2>
//       <ul>
//         {cartItems.map(({ id, name, quantity, price }) => (
//           <li
//             key={id}
//             className="flex justify-between items-center border-b py-2"
//           >
//             <span>
//               {name} x {quantity}
//             </span>
//             <span>₹{(price / 100) * quantity}</span>
//             <button
//               onClick={() => removeFromCart(id)}
//               className="text-red-600 hover:text-red-800 ml-4"
//             >
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={clearCart}
//         className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//       >
//         Clear Cart
//       </button>
//     </div>
//   );
// };

// export default Cart;








// import { useEffect, useState } from "react";
// import { MENU_API_URL } from "./constants"; // Ensure this path is correct

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const response = await fetch(MENU_API_URL + resId);
//         const json = await response.json();
//         setResInfo(json.data); // Often Swiggy-style APIs have a `data` wrapper
//       } catch (error) {
//         console.error("Failed to fetch restaurant menu:", error);
//       }
//     };

//     if (resId) {
//       fetchMenu(); // Call only when resId is present
//     }
//   }, [resId]); // Watch resId in case it changes

//   return resInfo;
// };

// export default useRestaurantMenu; 












// import { useEffect, useState } from "react";
// import { MENU_API_URL } from "./constants"; // Make sure this ends with a '/'

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const response = await fetch(`${MENU_API_URL}${resId}`);
//         const json = await response.json();

//         // ✅ Log once to explore structure if needed
//         // console.log("API response:", json);

//         if (json?.data) {
//           setResInfo(json.data);
//         } else {
//           console.warn("Unexpected API response format:", json);
//         }
//       } catch (error) {
//         console.error("Failed to fetch restaurant menu:", error);
//       }
//     };

//     if (resId) {
//       fetchMenu();
//     }
//   }, [resId]);

//   return resInfo;
// };

// export default useRestaurantMenu;











// import { useCart } from "../context/CartContext";
// import { useCart } from "../../context/CartContext";
// import { useCart } from "../context/CartContext";
// import RestaurantCards from "../Components/RestaurantCards";

// const useRestaurantMenu = () => {
//   // ... your existing code

//   const { addToCart } = useCart();

//   return (
//     <div className="menu px-8 py-4">
//       {/* existing header and menu sections */}
//       {menuSections.map((section, index) => (
//         <div key={index} className="mb-4 border rounded">
//           <button
//             className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
//             onClick={() => toggleSection(index)}
//           >
//             {section.title}
//           </button>

//           {openSectionIndex === index && (
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 py-3 bg-white">
//               {section.items.map((item) => (
//                 <RestaurantCards
//                   key={item.id}
//                   resData={item}
//                   onAdd={addToCart} // pass addToCart here
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };


// export default useRestaurantMenu;








// import React, { useState } from "react";
// import { useCart } from "../context/CartContext";
// import RestaurantCards from "../Components/RestaurantCards";

// const RestaurantMenu = ({ menuSections }) => {
//   const { addToCart } = useCart();
//   const [openSectionIndex, setOpenSectionIndex] = useState(null);

//   const toggleSection = (index) => {
//     setOpenSectionIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <div className="menu px-8 py-4">
//       {menuSections.map((section, index) => (
//         <div key={index} className="mb-4 border rounded">
//           <button
//             className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
//             onClick={() => toggleSection(index)}
//           >
//             {section.title}
//           </button>

//           {openSectionIndex === index && (
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 py-3 bg-white">
//               {section.items.map((item) => (
//                 <RestaurantCards
//                   key={item.id}
//                   resData={item}
//                   onAdd={() => addToCart(item)} // pass item on add
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;















// import { useEffect, useState } from "react";
// import { FOODAPP_MENU_URL } from "./constants";

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       const response = await fetch(FOODAPP_MENU_URL + resId);
//       const json = await response.json();
//       setResInfo(json);
//     };

//     fetchMenu();
//   }, [resId]);

//   return resInfo;
// };

// export default useRestaurantMenu;











