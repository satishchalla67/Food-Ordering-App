import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mock";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { OpenRestaurants } from "./RestaurantCard";
import userContext from "../utils/userContext";





const Body = () => {
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const onlineStatus = useOnlineStatus();

    const [searchText, setSearchText] = useState("");

    const OpenedRestaurants = OpenRestaurants(RestaurantCard);
    
    const {LoggedInUser, setUserName} = useContext(userContext);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4492973&lng=78.3650231&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //conditional rendering
    // if (ListOfRestaurants.length ==0){
    //     return <Shimmer/>;
    // }

    if (onlineStatus==false){
        return <div>
            <h1>Looks like you are offline!! Please check your internet connection!</h1>
        </div>
    }

    return ListOfRestaurants.length ==0 ? <Shimmer/> :(
        <div className="bg-gray-100">
            <div className="btn-container">
                
                <input data-testid="inputSearch" type="text" className="border border-solid border-black rounded-lg" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
                <button className="px-4 py-2 m-4 bg-green-200 hover:bg-green-300 cursor-pointer rounded-sm"
                onClick={()=> {
                    const filteredRestaurents = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filteredRestaurents);
                }}>Search</button>
                
                
                <button className="px-4 py-2 m-4 bg-yellow-200 hover:bg-yellow-300 cursor-pointer rounded-sm" 
                    onClick={() => {
                    const filteredList = ListOfRestaurants.filter((res) => res.info.avgRating>4);
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>

                <label>Username: </label>
                <input className="border-black border rounded-lg" value={LoggedInUser} onChange={(e) => {setUserName(e.target.value)}}></input>
            </div>


            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map(Restaurant => 
                        (<Link key={Restaurant.info.id} to={"/restaurants/"+Restaurant.info.id}>
                            {Restaurant.info.isOpen ? (<OpenedRestaurants resData={Restaurant}/>) : (<RestaurantCard resData= {Restaurant}/>)}
                        </Link>))
                }
            </div>
        </div>
    )
};

export default Body;