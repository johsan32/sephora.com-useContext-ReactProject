import {useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { ImPriceTags } from "react-icons/Im"
import { FcRating } from "react-icons/Fc";
import { GiBinoculars } from "react-icons/Gi";

const Card = ({ product }) => {

  const basketData = useContext(BasketContext);
  //console.log(basketData);

  //console.log(product.id);
  const firstImageUrl = product.attributes["image-urls"][0];
  const seeCount = product.attributes["reviews-count"];

  return ( 
    <div className="colums-5 border p-3 rounded-md shadow-md bg-slate-500">
      <img className="w-52 h-56 rounded-md" src={firstImageUrl} alt="" />
      <p className="h-12 flex w-52 items-center justify-center text-sm flex-wrap">{product.attributes.name}</p>
      <div className="flex row-auto items-center justify-between">
        <span className="flex row-auto items-center"><ImPriceTags className="text-1xl text-red-700 me-1"/>{product.attributes.price}</span>
        <span className="flex row-auto items-center"><FcRating  className="text-1xl text-yellow-700 me-1"/>{product.attributes.rating}</span>
        <span className="flex row-auto items-center"><GiBinoculars  className="text-1xl text-gray-700 me-1"/>{seeCount}</span>
      </div>
      <button 
      onClick={() => basketData.addToBasket(product)}
      className="bg-sky-500 hover:bg-sky-700 rounded-full mt-2 px-3">Add to Basket</button>
      
    </div>
  );
}

export default Card;
