import React from "react";
import { NavLink } from "react-router-dom";

function ImageCard({ imageDetails }) {
  console.log(imageDetails);
  return (
    <>
      <NavLink
        to={`/image_detail/${imageDetails.id}`}
        className="relative aspect-square h-72"
      >
        <div className="h-72 aspect-square">
          <img
            src={imageDetails.attributes.image.data[0].attributes.url}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className={`absolute top-0 h-72 aspect-square text-center opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-500`}
        >
          <p className="bg-black pt-2 pb-2 pl-6 pr-6 bg-opacity-80 w-10/12 m-auto absolute bottom-4 left-1/2 -translate-x-1/2">
            {imageDetails.attributes.titre.toUpperCase()}
          </p>
        </div>
      </NavLink>
    </>
  );
}

export default ImageCard;
