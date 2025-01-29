import axios from "axios";
import React, { useEffect, useState } from "react";

function Mahsulot() {
  const [maxsulot, setMaxsulot] = useState([]);

  useEffect(() => {
    axios
      .get("https://mobile.olcha.uz/api/v2/product-of-the-day")
      .then((res) => {
        console.log(res.data.data.products[0]);

        setMaxsulot(res.data.data.products[0]);
      });
  }, []);

  return (
    <div>
      <div className="border-2 rounded-xl  border-red-500 pl-3 w-80  pr-2 py-4">
        <h2 className="font-bold text-xl">Kun Mahsulotlari</h2>
        <img className="w-60 mx-auto " src={maxsulot?.main_image||"Rasm"} alt="" />
        <p className="text-xl mb-3">{maxsulot?.name_uz||"Name"}</p>

        <div className="flex items-center mb-2 gap-3">
        <h2 className="text-xl font-mono text-red-700 font-bold ">{maxsulot?.discount_price||"Narxi"} so'm</h2>
        <del className="text-gray-400">{maxsulot?.discount_price * 1.2 ||"chegirma"}</del>
        </div>
        <button className="cursor-pointer bg-yellow-300 rounded-lg text-sm p-1 ">
          {" "}
          2 148 000 so'm x 12 oy
        </button>
      </div>
    </div>
  );
}

export default Mahsulot;
