
//Episode 1---------------------------------------------------------------------------------------
//REACT ELEMENT 

import React, { createContext, useState } from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id:"heading", class: "headingClass"}, 
    "Hello World from React!");


const parent = React.createElement("div", {id:"parent"}, 
    [React.createElement("div", {id:"child", class:"childElements1"}, 
        [React.createElement("h1", {}, "I am a h1 tag!"),
            React.createElement("h2", {}, "I am a h2 tag!"),
            React.createElement("h3", {}, "I am a h3 tag!"),
            React.createElement("h4", {}, "I am a h4 tag!"),
        ]
    ),React.createElement("div", {id:"child", class:"childElements2"}, 
        [React.createElement("h1", {}, "I am a h1 tag!"),
            React.createElement("h2", {}, "I am a h2 tag!"),
            React.createElement("h3", {}, "I am a h3 tag!"),
            React.createElement("h4", {}, "I am a h4 tag!"),
        ]
    )]
);



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


root.render(parent);


//Episode 2------------------------------------------------------------------------------------


//npm init //to initialize
//npm init -y //can be used to skip the setup step
//npm install -D parcel
//npx parcel index.html      //dist (stands for distributable) folder will be created and generates a development build. and hosts its to 1234 server

//npx parcel buid index.html //generates a production ready build
                             //here it is specificing that index.html is the entry point to our app, but in package.json 
                             //if someother thing is specified as "main": "App.js" it will thow an error. remove this from package.json
//npm install react
//npm i react-dom


//Ignite our App
//How to include nmp in our app

//(package.json is the configuration for npm. nmp will take care of the dependecies/packages in the package.json)
//(There are 2 types of dependencies we can install 1.dev dependency, 2.normal dependency)
//^(carret will upgrade to minor versions of dependencies configured in the package.json)
//~(major upgrades)
//package-lock.json = It will save detailed info about the exact version of the dependencies.
//node_modules = will fetch and save the code for dependecies to our local machine. it is heavy
//no need to push node_modules to git since it is heavy. Add /node_modules to .gitignore.
//if you have package.json and package-lock.json you can recreate all your node_modules("npm install" to regenerate node_modules)

//parcel is a dev build, local server, HMR = hot module replacement, file watching algorithm written in c++, caching - faster builds,
//image optimization, minification, bundling, compressing, consistent hashing, code splitting, differential bundling - support for older browsers,
//diagnostic, error handling, HTTPs, Tree shaking - remove unused code, different build in dev and prod bundles

//npx means executing our app

//after installing react, it will be available in node_modules. we can use react by importing it - 
// import React from "react"
// import ReactDOM from "react-dom/client"
//(Error = normal browser cannot have import or export statements. So add type="module" in html file script tag)


//browserslist = add it in package.json. "browserslist": ["last 2 chrome versions", "last 2 firefox versions"]




//Episode 3------------------------------------------------------------------------------------


//Go to package.json and add "scripts": {"start": "parcel index.html", "build": "parcel build index.html"}
//now instead of using `npx parcel index.html` and `npx parcel build index.html`
//now you can use `npm run start` or `npm start` = start project in developement mode
//                 `npm run build` = for production ready build

//React element is a object
//root.render = whenever we are rendering any react element to html element we are REPLACING all the elements in it.

//JSX = it is a HTML like syntax, makes easier to write html elements in react

//Babel is a Java Scirpt Compiler which helps in converting JSX code to Java Script code along with Parcel
//JSX works
//JSX => React.createElement => ReactElement JS-Objct => HTML Code.

//HTML and JSX have slightly different syntax, for example  `class` in HTML    => `className` in JSX
//                                                          `tabindex` in HTML => `tabIndex` in JSX
//camel case is used always in JSX

//Homework : Explore various attributes of various tags in JSX
//           how to write img tag and anchor tag in JSX

//multi line code in JSX = wrap it in round brackets ()


//REACT COMPONENTS = 1.Class Based Components = OLD
//                   2.Functional Components = NEW

//REACT FUNCTIONAL COMPONENT = It is a normal JavaScript function which returns some JSX element.
//                             Always starts with capital letter.
//                             {} write any JavaScript code inside curly braces

//Component Composition = renderig two components in one another


import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";

//React Functional Component
const JsxHeading = () => (
    <h1 className="myHeading">
        Namste React using JSX🚀
    </h1>
);

//JSX
const elem = <span>This is a JavaScript code</span>;


//React Functional Component
const HeadingComponent = () => (
    <div id="reactComponent">
        <JsxHeading />
        {elem}
        <h1>Namste React from React Functional Component</h1>
    </div>
);

//JSX
// JSX syntax allows embedding JavaScript within {}.
// React components are used in JSX with <> tags.
// Both JSX and plain JavaScript can coexist, as shown in your title example.
const title = (<div id="mainDiv" className="mainDivClass">
    {elem}
    <HeadingComponent/> 
    <HeadingComponent></HeadingComponent>
    {HeadingComponent()}
</div>);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);
// root.render(<HeadingComponent/>);

//Episode 4------------------------------------------------------------------------------------

/**
 * 
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -COntact
 */

//1.What is functional component = Just a normal javascript function which retuns some JSX.
//2.When we want to dynamically send data to functional component - we use props - props are sending arguments to a javascript function

//CONFIG DRIVEN UI

//We need to have unique key for every child (key is a keyword) - React can render better - It is not recommanded to use index as unique key. 
//If you dont have any unique Id then use index
<div className="res-container">
                {
                    resList.map(Restaurant => (<RestaurantCard key={Restaurant.data.id} resData= {Restaurant}/>))
                }
            </div>


//Episode 5-------------------------------------------------------------------------------------------------------


//Types of Export/Import

//-Default Export/Import

// export default component;
// import component from "path"; 

//-Named Export/Import

// export const component = ;
// import {component} from "path";

//------------------------------------------------------------------------------------
//REACT HOOK - a normal javascript utility functions given to us by react
// -useState() - super powerful state variables in react
// -useEffect()

//NORMAL JAVASCRIPT -
let list = [];
list = ["ABC"]; //modify

const list2 = [];
list.push("ABC") //modify

//LOCAL STATE VARIABLE - SUPER POWERFUL VARIABLE
const [ListOfRestaurants, setListOfRestaurants] = useState([
    {
    id: '121604',
    name: 'Kannur Food Point',
    cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
    cuisines: ['Kerala', 'Chinese'],
    costForTwo: 30000,
    minDeliveryTime: 24,
    avgRating: '3.9'
    },
    {
    id: '121603',
    name: 'Kannur Food Point',
    cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
    cuisines: ['Kerala', 'Chinese'],
    costForTwo: 30000,
    minDeliveryTime: 24,
    avgRating: '3.9'
    }
]);

const filteredRestaurants = ListOfRestaurants.filter((res) => res.avgRating >4);
setListOfRestaurants(filteredRestaurants) //modify
setListOfRestaurants([]) //making ListOfRestaurants empty

//"Whenever a state variable updates, react re-renders the component"
//Reconciliation Algorithm (React Fiber) - came in React16
// Whenever there is any change in any component react creates a new virtual DOM and compares it with the old
//DOM, if any changes found. react replaces old dom with new dom
//-------------------------------------
//Virtual DOM - representation of an actual DOM



//Episode 6-------------------------------------------------------------------------------------------------------

//Hooks are nothing but normal javascript functions
//useState is a function which is used to create state variables

//shimmer UI


//Episode 6-------------------------------------------------------------------------------------------------------

//import { useEffect } from "react";

//useEffect(() => {});
//if no dependency array => useEffect will be called everytime when a component is called.

//useEffect(() => {}, []);
//if dependency array is empty [] => useEffect will be called on initial render (Just once)

//useEffect(() => {}, [btnNameReact]);
//if dependency array is [btnNameReact], useEffect will be called whenever there is a change in btnNameReact


//---------
//The below are from react-router-dom

//createBrowserRouter, RouterProvider

//Outlet - to route children routes and changes component according to children

//useRouteError - is a hook given to us by React to handle error in routes


//import { Link } from "react-router-dom";
//link - given by react-router-dom - <Link to="/contact-us">Contact us<Link/> - this will change the components without refreshing the full page.

//import { useParams } from "react-router-dom";





//Episode 8-------------------------------------------------------------------------------------------------------


//REACT CLASS COMPONENT LIFE CYCLE

//1.Whenever a class component is called new instance of that class
//component is created.

//2.First constructor() will be called -> 
//render() will be called ->
//componentDidMount() will be called

//componentDidMount is used to make an API Call


//this.state = {<object>}; is a object
//this.setState({<object>}); is a method 


//Episode 8-------------------------------------------------------------------------------------------------------

//Chunking
//Code Splitting
//Dynamic Bundling
//lazy loading
//on demand loading
//dynamic import

import { lazy, Suspense } from "react";

//Episode 9-------------------------------------------------------------------------------------------------------

//Different types if using CSS styles in project

//1.Not used in industry
//SASS - Syntactically Awesome Style Sheets

//2.Used in industry
//Styled Components

//3.CSS Librabies
//-------------
//Material UI
//Bootstrap
//Chakra UI
//Ant UI

//4.Tailwind CSS

//VS Code extention - Tailwind IntelliSense


//Episode 11-------------------------------------------------------------------------------------------------------

//HIGHER ORDER COMPONENTS = It is a component that a takes a component and returns a component
//                          Takes an existing component and enhances it


//Accordian = where we can expand or collapse the cards


//Lifiting the state up

import { useContext } from "react";
//props drilling
//      - createContext() - to create a context which is like a gobal object that can be used anywhere in the project
//      - userContext() - It is a hook which is used to use context in any React component. 


//Episode 12-------------------------------------------------------------------------------------------------------

//Redux - it is a state management tool. Redux offers easy debugging

//Redux is not manditory for small or mid sized applications. Redux and React are seperate libraries


//Redux Store = It is like a very big object which is accessable to any component in the React


//#Redux
//  - Install @reduxjs/toolkit and react-redux
//  - Build our store
//  - Connect our store to our app
//  - Slice(cartSlice)
//  - dispatch(action)
//  - Selector



//1.Create a store using configureStore()
import { configureStore } from "@reduxjs/toolkit";

//2.Provide the store to react application using provider. It takes store as a prop

import { Provider } from "react-redux";


//3.create a slice using createSlice()
import { createSlice } from "@reduxjs/toolkit";
//This sice will take configurations like =
// - name
// - initialState
// - reducers = This will contain actions of cart like = addItem, removeItem, clearCart
//              These are a small APIs to communicate with Redux store
//              Takes 2 paramerters state and action

//Reducers (functions that handle state changes).
//Actions (functions that dispatch state changes).



//Episode 13-------------------------------------------------------------------------------------------------------


//Types of testing
//1.Unit Testing
//2.Integration Testing
//3.End to end testing = e2e testing


//Libraries we are going to use:
//React Testing Library
//Jest


//Setting up Testing.

//1.Install React Testing Library = npm i -D @testing-library/react
//2.Install jest =                  npm i -D jest
//3.Install Babel dependencies =    npm install --save-dev babel-jest @babel/core @babel/preset-env
//4.Configure Babel                 Go to jest website, search for "Using Babel"
//                                  create and add content in file "babel.cofig.js"
//5.Configure parcel config file=   create a file .parcelrc and copy content from parcel website=> javascript=> bebal=> using other tools
//to disable babel transpilation
//6.Jest cofiguration=              npx jest --init
//7.Install jsdom Library=          Go to https://testing-library.com/ => React Testing Library => Setup => Jest 28 => copy the command
//                                  npm install --save-dev jest-environment-jsdom
//8.Install babel preset-react=     npm i -D @babel/preset-react (To make JSX work in testcases)
//9.Include @babel/preset-react     Add ['@babel/preset-react', { runtime: "automatic" }], inside babel.config.js
//inside babel config
//10.Install=                       npm i -D @testing-library/jest-dom