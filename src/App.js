import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./container/about/About";
import Contact from "./container/contact/Contact";
import Home from "./container/home/Home";
import ImageDetails from "./container/imageDetails/ImageDetails";
import Portfolio from "./container/portfolio/Portfolio";
import LoadingScreen from "./container/loading/LodingScreen";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => setIsLoaded(true), 4000);

  return (
    <>
      <div className="h-screen w-full fixed z-40">
        <div className="h-24 w-24 border-solid border-t-[12px] border-l-[12px] absolute border-[#252525]"></div>
        <div className="h-24 w-24 border-solid border-t-[12px] border-r-[12px] absolute border-[#252525] right-0"></div>
        <div className="h-24 w-24 border-solid border-b-[12px] border-r-[12px] absolute border-[#252525] right-0 bottom-0"></div>
        <div className="h-24 w-24 border-solid border-b-[12px] border-l-[12px] absolute border-[#252525] left-0 bottom-0"></div>
      </div>
      <div className="relative z-50">
        <LoadingScreen className="loading_screen" />
        <Routes>
          <Route index element={<Home isLoaded={isLoaded} />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/image_detail/:imageId" element={<ImageDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
