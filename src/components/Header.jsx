import { Link } from "react-router-dom";
import { BsBasket } from "react-icons/Bs";
import { FaStore } from "react-icons/Fa";
import { useContext, useState } from "react";
import { BasketContext } from "../context/BasketContext";
import Load from "./Load";


const Header = () => {
  const { basket, showLoading } = useContext(BasketContext);

  const total = basket.reduce((total, i) => total + i.amount, 0);



  return (
    <header className="container m-auto bg-white text-black flex items-center justify-between p-3">
      <Link to="/" className="flex gap-5 items-center">
        <FaStore className="text-5xl relative text-blue-700" />
        <h1 className=" text-3xl font-bold text-center text-blue-700">Sephora.com</h1>
      </Link>
      <div>       
        {showLoading === false ? <Load /> : <img className="w-16 h-16" src="https://media2.giphy.com/media/uZ7wLTpoMbtikW2wUY/giphy.gif" />}       
      </div>
      <Link to="/basket" className="pe-3 relative flex items-center  flex-col">
        <span className="text-1xl font-bold text-center p-1 bg-orange-400 rounded-full absolute -top-3 z-10 opacity-80 ">
          {total}
        </span>
        <BsBasket
          className="text-4xl me-0 relative text-green-400"
        />
      </Link>
      
    </header>
  );
};

export default Header;
