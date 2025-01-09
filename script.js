
//Episode 1---------------------------------------------------------------------------------------
//REACT ELEMENT 

import React from "react"
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