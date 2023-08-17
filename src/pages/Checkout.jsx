import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { MdPriceCheck } from "react-icons/Md";
import { AiOutlinePlus } from "react-icons/Ai";
import { AiOutlineMinus } from "react-icons/Ai";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { basket, removeFromBasket, addToBasket } = useContext(BasketContext);

  return (
    <div className="mt-5">
      {basket.length == 0 && (
        <Link className="items-center w-full mt-8 text-3xl" to="/">
          There are no items in the cart...
          <span className="text-blue-900"> Products Page </span>
        </Link>
      )}
      {basket.length > 0 && <h1 className="text-3xl font-bold">Products in the Basket</h1>}
      {basket.length > 0 &&
      
        basket.map((i) => (
          <div
            key={i.id}
            className=" container flex items-center justify-between m-auto mt-3 border-b-2 pb-3">
            <div className="flex items-center justify-start gap-8 ms-3 text-3xl">
              <img
                className="w-20 h-20 rounded-full"
                src={i.attributes["image-urls"][0]}
                alt=""
              />
              <h1>{i.attributes.name}</h1>
            </div>
            <div className="flex gap-10">
              <p className="flex row-auto items-center justify-end font-semibold text-2xl">
                {" "}
                <MdPriceCheck className="text-2xl text-white me-1" />{" "}
                {i.attributes.price * i.amount}
              </p>
              <div className="flex row-auto items-center gap-3 me-4">
                <span>
                  <AiOutlineMinus
                    onClick={() => removeFromBasket(i)}
                    className="text-2xl text-white bg-red-900  me-1 border rounded  cursor-pointer"
                  />
                </span>
                <span>{i.amount}</span>
                <span>
                  <AiOutlinePlus
                    onClick={() => addToBasket(i)}
                    className="text-2xl text-white bg-green-900 me-1 border rounded cursor-pointer"
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Checkout;
