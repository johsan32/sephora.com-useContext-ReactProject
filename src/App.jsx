import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import { BiLogoTailwindCss } from "react-icons/Bi";
import { AiFillGithub } from "react-icons/Ai";
import { AiFillLinkedin } from "react-icons/Ai";

function App() {
  return (
    <>
      <div>
        <header className="container m-auto items-center justify-beetween">
          <div className="flex ps-3">
            <a href="/">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="/">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <BiLogoTailwindCss className="text-6xl text-blue-400" />
          </div>
          <h3 className="text-2xl">useContext Project</h3>
          <div className="flex items-center justify-center gap-3">
            <a href="https://github.com/johsan32" target="_blank"> <AiFillGithub className= "text-3xl cursor-pointer hover:bg-sky-700 rounded-full" /></a>
            <a href="https://www.linkedin.com/in/hasan-ulusoy-react/" target="_blank"> <AiFillLinkedin  className= "text-4xl cursor-pointer hover:bg-sky-700 rounded-10"  /></a>
            <h2  className="me-2">Vite + React + Tailwind</h2>
          </div>
          
        </header>
      </div>
      <div>       
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="basket" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
