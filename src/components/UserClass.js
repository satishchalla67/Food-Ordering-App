import React from "react"
import userContext from "../utils/userContext";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Default"
            }
        }
        console.log("constructor called!!");
    }

    async componentDidMount(){
        console.log("Component did mount called!!");
        const data = await fetch("https://api.github.com/users/1");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate(){
        console.log("Component did update called!!!");
    }

    componentWillUnmount(){
        console.log("component wil unmount called!!");
    }


    render(){
        console.log("render called!!!");
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h2>Contact: @satishchalla</h2>
                <userContext.Consumer>
                    {(data)=> (
                        <h2>User: {data.LoggedInUser}</h2>
                    )}
                </userContext.Consumer>
            </div>
        );
    }
};

export default UserClass;