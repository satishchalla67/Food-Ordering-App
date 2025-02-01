import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import userContext from "./utils/userContext";


const Grocery = lazy(()=> import("./components/Grocery"));



const AppLayout = () => {

    //Authentication Logic
    const [userName, setUserName] = useState("Default User");

    useEffect(() => {
        //make a API call and get the username and password
        const data = {

            name: "Satish Challa",
        };
        setUserName(data.name);
    }, []);




    return (
        <userContext.Provider value={{LoggedInUser: userName, setUserName}}>
            <div className="app">
                <userContext.Provider value={{LoggedInUser: "Elon Musk"}}>
                    <Header/>
                </userContext.Provider>
                <Outlet/>
            </div>
        </userContext.Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact-us",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense><Grocery/></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }

        ],
        errorElement: <Error/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);