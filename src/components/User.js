import { useState } from "react";


const User = ({name, location}) => {

    const [count] = useState(0);
    const [count2] = useState(2);

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h2>Contact: @satishchalla</h2>
        </div>
    );
};

export default User;