

import { useState } from "react";
import ItemCards from "./ItemCards";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    const handleClick = () => {
    };

    return (
        <div>
            {/* Header*/}
            <div className="w-6/12 bg-gray-100 my-4 mx-auto p-4 shadow-lg">
                <div className="flex justify-between font-bold cursor-pointer" onClick={setShowIndex}>
                    <span>{data.title} ({(data.itemCards ?? data.carousel)?.length})</span>
                    <span>⏬</span>
                </div>

                {showItems && <div className="m-2"><ItemCards items = {data.itemCards ? data.itemCards : data.carousel}/></div>}
            </div>
            
            {/*accordian*/}
            
        </div>

    );

};

export default RestaurantCategory;