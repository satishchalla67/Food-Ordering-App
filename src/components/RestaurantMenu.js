import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";



const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null);


    const {resId} = useParams();
    const restInfo = useRestaurantMenu(resId);

    if (restInfo == null){
        return <Shimmer/>;
    };

    const categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (car) => (
            car.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel" ||
            car.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ));

    console.log(categories);

    // const datatoUse = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ?? cardData?.carousel;

    const {name, cuisines, avgRating, costForTwoMessage, totalRatingsString} = restInfo?.cards[2]?.card?.card?.info;
    
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold my-2">{name}</h1>
            <h2 className="text-lg font-bold">{cuisines.join(", ")} - {costForTwoMessage}</h2>
            {/*categories accordian */}
            {categories.map((category, index) => <RestaurantCategory 
            key={category.card?.card.title} data = {category.card?.card}
            showItems={index ===showIndex && true}
            setShowIndex = {() => {index ===showIndex ? setShowIndex(null) :setShowIndex(index)}}
            />)}
        </div>
    )

};

export default RestaurantMenu;