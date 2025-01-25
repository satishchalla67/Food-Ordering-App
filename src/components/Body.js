import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mock";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";





const Body = () => {
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

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

    return ListOfRestaurants.length ==0 ? <Shimmer/> :(
        <div className="body">
            <div className="btn-container">
                
                <input type="text" className="search-box" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
                <button onClick={()=> {
                    const filteredRestaurents = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filteredRestaurents);
                }}>Search</button>
                
                
                <button className="filter-btn" 
                    onClick={() => {
                    const filteredList = ListOfRestaurants.filter((res) => res.info.avgRating>4);
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>


            <div className="res-container">
                {
                    filteredRestaurants.map(Restaurant => (<RestaurantCard key={Restaurant.info.id} resData= {Restaurant}/>))
                }
            </div>
        </div>
    )
};

export default Body;