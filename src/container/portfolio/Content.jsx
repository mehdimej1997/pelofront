import React, { useEffect, useState } from "react";
import ImageCard from "../../components/UI/ImageCard";
import ImageServices from "../../service/imageApi";
import Spinner from "../../components/UI/Spinner";

function Content() {
  const [images, setImages] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    ImageServices.getSomeImages().then((res) => {
      setImages(res);
      setIsLoaded(true);
    });
  }, []);
  return (
    <>
      {images !== "" && isLoaded ? (
        <div className="mt-32 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center justify-items-center">
          {images !== "" &&
            images
              .map((data, i) => <ImageCard key={i} imageDetails={data} />)
              .filter((_, i) => i < 12)}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Content;
