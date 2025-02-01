import { CDN_URL } from "../utils/constants";

const ItemCards = ({items}) => {

    return (
        <div>
          {items.map((item) => (
            <div
              key={(item.dish ?? item.card).info.id}
              className="p-2 m-2 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{(item.dish ?? item.card).info.name}</span>
                  <span>
                    - ₹
                    {(item.dish ?? item.card).info.price
                      ? (item.dish ?? item.card).info.price / 100
                      : (item.dish ?? item.card).info.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-xs">{(item.dish ?? item.card).info.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button className="p-2 ml-6 mt-[70px] rounded-lg bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s]">
                    Add +
                  </button>
                </div>
                <img
                  src={CDN_URL + (item.dish ?? item.card).info.imageId}
                  alt={(item.dish ?? item.card).info.name}
                  className="w-full rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      );
    };

//item.card.info = item.dish ?? item.card).info.

export default ItemCards;