import axios from "axios";
import React, { useEffect, useState } from "react";

function Slider() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://mobile.olcha.uz/api/v2/extra/sliders", )
      .then((response) => {
        const imgg=response.data.data.sliders.map((item) => item.image_uz)
        setImages(imgg); // Ma'lumotlarni saqlash
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      });
  }, []);

  if (!images || images.length === 0) {
    return <div>Yuklanmoqda...</div>;
  }

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
      <div className="px-10 w-[70%] ">
        <div className="relative flex items-center">
          {index > 0 && (
            <button
              className="absolute cursor-pointer left-1 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
              onClick={prevSlide}
            >
              &#60;
            </button>
          )}

          <img
            className=" rounded-lg h-[400px] shadow-lg cursor-pointer"
            src={images[index]}
            alt={`Slide ${index + 1}`}
          />

          {index < images.length - 1 && (
            <button
              className="absolute cursor-pointer right-8 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
              onClick={nextSlide}
            >
              &#62;
            </button>
          )}
        </div>
      </div>
    
  );
}

export default Slider;
