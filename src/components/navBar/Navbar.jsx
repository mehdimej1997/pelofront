import React, { useEffect, useState } from "react";
import NavbarComputer from "./NavbarComputer";
import NavbarMobile from "./NavbarMobile";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function Navbar() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }, 100);
    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);
  console.log(dimensions);
  return <>{dimensions.width > 900 ? <NavbarComputer /> : <NavbarMobile />}</>;
}

export default Navbar;
