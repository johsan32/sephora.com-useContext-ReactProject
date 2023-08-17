import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);


  const [showLoading, setShowLoading] = useState(false); // Yeni durum

  const addToBasket = (product) => {
    setShowLoading(true); // 

    const found = basket.find((i) => i.id === product.id);
    if (found) {
      const index = basket.findIndex((i) => i.id === product.id);
      const clone = [...basket];
      clone[index] = { ...found, amount: found.amount + 1 };
      setBasket(clone);
    } else {
      setBasket([...basket, { ...product, amount: 1 }]);
    }

    setTimeout(() => {
        setShowLoading(false); // Belirli bir süre sonra Loading gizle
      }, 2000); 

  };

  const removeFromBasket = (product) => {
    const found = basket.find((i) => i.id === product.id);

    if (found.amount > 1) {
      const uptated = basket.map((i) =>
        i.id === found.id ? { ...found, amount: found.amount - 1 } : i
      );
      setBasket(uptated);
    } else {
      const filtered = basket.filter((i) => i.id !== product.id);
      
      toast.error("You removed the product from the basket !", {
        position: toast.POSITION.TOP_CENTER
      });
      setBasket(filtered);
    }
  };
  console.log(basket);

  return (
    <> 
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, showLoading }}>
      {children}
    </BasketContext.Provider>
    <ToastContainer autoClose={2000}/>
    </>
  );
}
