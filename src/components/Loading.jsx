import Product from "../pages/Product";

const Loading = () => {
  return (
    <>
      <div className="container w-full flex items-center justify-center">
        <img
          className="flex w-56 h-40"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif"
          alt=""
        />
      </div>
      <div className="container w-full flex items-center justify-center">
        <img className=" w-56 h-36" src="https://media3.giphy.com/media/7LPWQHzFiYxJS/source.gif" alt="" />
      </div>
      <div className="container w-full h-12 flex items-center justify-center">
        <h1>Loading : https://sephora.p.rapidapi.com/products</h1>
      </div>

    </>
  );
};

export default Loading;
