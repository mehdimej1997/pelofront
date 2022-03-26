import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageService from "../../service/imageApi";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navBar/Navbar";
import "./ImageDetails.scss";

function ImageDetails() {
  const { imageId } = useParams();
  const [imageDetails, setImageDetails] = useState("");
  useEffect(() => {
    ImageService.getImageByID(imageId).then((res) => setImageDetails(res.data));
  }, []);
  console.log(imageDetails);
  return (
    <>
      <div className={`App text-gray-100 m-auto text-center`}>
        <Navbar />
        <h1 className="text-2xl mt-16">Infos ...!</h1>
        <div className="h-[700px] flex justify-center my-16">
          <img
            src={imageDetails?.attributes?.image.data[0].attributes.url}
            className="h-full responsive_img"
          />
        </div>

        <div className="responsive">
          <h1 className="text-3xl text-left mb-5">
            {imageDetails?.attributes?.titre}
          </h1>
          <div className="flex flex-col">
            <div className="w-3/4 sm:w-full my-6">
              <p className="raleway_font text-left tracking-wider font-medium text-neutral-400">
                {imageDetails?.attributes?.description}
              </p>
            </div>
            <div>
              <ul className="w-36">
                <li className="grid grid-cols-3 gap-10">
                  <span>Model</span>
                  <span>:</span>
                  <span>{imageDetails?.attributes?.model}</span>
                </li>
                <li className="grid grid-cols-3 gap-10 ">
                  <span>Ville</span>
                  <span>:</span>
                  <span>{imageDetails?.attributes?.ville}</span>
                </li>
                <li className="grid grid-cols-3 gap-10 ">
                  <span>Date</span>
                  <span>:</span>
                  <span>{imageDetails?.attributes?.model}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ImageDetails;
