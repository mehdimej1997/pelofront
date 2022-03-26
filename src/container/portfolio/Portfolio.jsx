import React from "react";
import classes from "./portfolio.module.css";
import Content from "./Content";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navBar/Navbar";

function Portfolio() {
  return (
    <>
      <section className={`App text-gray-100 m-auto`}>
        <Navbar />
        <section className="text-center">
          <p className="text-4xl mt-32 tracking-wider">Portfolio</p>
          <p
            className={`${classes.raleway_font} text-gray-500 text-lg font-light mt-4`}
          >
            SOME OF MY WORKS
            {/* PHOTOGRAPHER / CINEMATOGHRAPHER / JOURNALISTE STUDENT */}
          </p>
        </section>

        <section className="content">
          <Content />
        </section>
        <Footer />
      </section>
    </>
  );
}

export default Portfolio;
