import axios from "axios";
import React, { useEffect, useState } from "react";
// import savat from "../../assets/savat";
import ShoppingCart01Icon from "../../assets/savat";
// import FavouriteIcon from "../../assets/yure";
import redH from "../../assets/redH.svg";
import blackH from "../../assets/blackH.svg";
// import CardTitle from "./CardTitle";
import { Link } from "react-router";
function Cards() {
  const [card, setCard] = useState([]);
  const [isLiked, setIsLiked] = useState([]);
  const submit = (index) => {
    const like = [...isLiked];
    like[index] = !like[index];
    setIsLiked(like);
  };
  useEffect(() => {
    axios
      .get("https://mobile.olcha.uz/api/v2/products?is_sale=true")
      .then((res) => {
        setCard(res.data.data.products);
        // console.log(res.data.data.products);
      });
  }, []);

  return (
    <>
    <div className="grid grid-cols-5 gap-5 container  mx-auto px-6">
      {card.map((item, index) => (
        <div className="my-5 cursor-pointer relative">
         <Link to={`/cardtitle/${item.alias}`} >
         <img className="h-96" src={item.main_image} alt="" />
         </Link>
          <div className="p-3">
            <h2 className="text-xl mb-5">{item.name_oz}</h2>
            <div className="mb-5">
              <p className="text-lg font-bold font-mono">
                {item.total_price} so'm
              </p>
              <button className="bg-amber-300 px-3 rounded-lg  font-mono">
                {item.monthly_repayment} som x 12 oy
              </button>
            </div>
            <div className="flex gap-3 items-center">
              <button className="bg-transparent border-2 cursor-pointer hover:bg-gray-50 border-black rounded-lg p-2">
                <ShoppingCart01Icon />
              </button>
              <button className="bg-transparent border-2 w-42 border-red-400 hover:bg-red-50 cursor-pointer text-red-400 rounded-lg p-2">
                Muddali tolov
              </button>
            </div>
          </div>
          <div className="absolute top-2 right-2 w-8 pt-1 h-8 rounded-full">
            <img
              onClick={() => {
                submit(index);
              }}
              src={isLiked[index] ? redH : blackH}
              alt=""
            />
          </div>
        </div>
      ))}

    </div>
    </>
  );
}

export default Cards;
