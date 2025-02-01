import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";


const RestaurantCard = (props) => {

    const {resData} = props

    const {name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla} = resData?.info

    const {LoggedInUser} = useContext(userContext);

    return (
        <div className="w-52 m-3 p-2 bg-gray-150 hover:bg-gray-300">
            <img 
            className="w-full h-32 object-cover rounded-lg"
            alt="res-image" 
            src={CDN_URL+ cloudinaryImageId}/>
            <h3 className="font-bold">{name}</h3>
            <h4 className="break-words whitespace-normal">{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4 className="italic">{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
            <h4>User: {LoggedInUser}</h4>
        </div>
    )
};


export const OpenRestaurants = (RestaurantCard) => {

    return (props) => {
        return(
            <div>
                <label className="absolute px-2 py-1 bg-gray-800 text-white rounded-lg">Open</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;