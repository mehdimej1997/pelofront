import React from "react";
import loadingImg from "../../assets/img/loding.jpg";
import logo from "../../assets/img/logo.png";
import logoB from "../../assets/img/logo_black.png";

function LodingScreen({ className }) {
  return (
    <div className={"h-screen w-full absolute z-50 " + className}>
      <div className="absolute z-50 h-full w-full flex items-center justify-center">
        <img src={logoB} alt="moustakfi" className="h-96 w-96" />
      </div>
      <img src={loadingImg} alt="moustakfi" className="h-full w-full blur-sm" />
    </div>
  );
}

export default LodingScreen;
