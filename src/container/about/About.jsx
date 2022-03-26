import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navBar/Navbar";
import Spinner from "../../components/UI/Spinner";
import "./About.scss";

function About() {
  const [profile, setProfile] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    setIsLoaded(false);
    axios
      .get(`https://peloportfolio.herokuapp.com/api/profile?populate=*`)
      .then((res) => res.data)
      .then((data) => {
        setProfile(data.data);
        setIsLoaded(true);
      });
  }, []);

  return (
    <>
      <section className={`App text-gray-100 m-auto`}>
        <Navbar />
        {isLoaded ? (
          <div className="container mt-16 flex flex-col items-center gap-8">
            <h3 className="text-3xl">A propos...!</h3>
            <div className="h-96">
              <img
                src={profile?.attributes.image_profile.data.attributes.url}
                alt=""
                className="h-full"
              />
            </div>
            <p className="tracking-wider text-neutral-400 text-center raleway_font w-1/3">
              {profile?.attributes.description}
            </p>
            <ul className="w-8/12">
              {profile?.attributes.skills.data.map((item, i) => (
                <li key={i} className="my-4">
                  <div className="flex justify-between">
                    <h3 className="tracking-widest raleway_font">
                      {item.attributes.skill_name}
                    </h3>
                    <h3 className="raleway_font">
                      {item.attributes.skill_level}%
                    </h3>
                  </div>

                  <div className="bar-container w-full bg-slate-500 opacity-50 h-2 rounded-md">
                    <div
                      className={`h-2 bg-red-700 rounded-md transition-all width-${item.attributes.skill_level}`}
                      id="progress-angular"
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <Spinner />
        )}
        <Footer />
      </section>
    </>
  );
}

export default About;
