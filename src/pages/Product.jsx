import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Loading from "../components/Loading";


const Product = () => {
  const [products, setProducts] = useState(null);

  const options = {
    method: "GET",
    url: "https://sephora.p.rapidapi.com/products/v2/list",
    params: {
      number: "1",
      size: "50",
      country: "SG",
      language: "en-SG",
      sort: "sales",
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY ,
      "X-RapidAPI-Host": "sephora.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => setProducts(res.data.data))
      .catch((error) => console.error(error));
  }, []);


  return (
    <>
      <div className="container m-auto items-center my-2">
        <h1 className="text-4xl text-white mt-4">Our Products</h1>
      </div>
      <div className="container m-auto flex items-center justify-between  gap-3 columns-5 flex-wrap mt-4">
        {products ? (products.map((product) => (
          <Card key={product.id} product={product} />
        ))) : (
      <Loading />)
      }
      </div>
    </>
  );
};

export default Product;
