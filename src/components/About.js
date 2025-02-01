import User from "./User";
import UserClass from "./UserClass";
import React from "react";




class About extends React.Component{

    constructor(props){
        super(props);

    }

    componentDidMount(){
    }

    render(){
        return (
            <div className="about">
                <h1>About us!!</h1>
                <h2>This is Namste JavaScript!!</h2>
                <h3>Welcome!!</h3>
                <UserClass/>
            </div>
    
        );
    }
}

export default About;