
//Episode 1
//REACT ELEMENT 


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


//npm init
//npm install -D parcel


//Ignite our App
//How to include nmp in our app
//(package.json is the configuration for npm. nmp will take care of the dependecies/packages in the package.json)
//(There are 2 types of dependencies we can install 1.dev dependency, 2.normal dependency)
//^(carret will upgrade to minor versions of dependencies configured in the package.json)
//package-lock.json = It will save details info about the exact version of the dependencies.
//node_modules = will fetch and save the code for dependecies to our local machine. it is heavy