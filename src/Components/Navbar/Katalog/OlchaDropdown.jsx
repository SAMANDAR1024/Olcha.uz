import React from "react";
import olcha from "../../../assets/eco-products-logo.svg";
import olcha2 from '../../../assets/olca2.svg'
import olcha3 from '../../../assets/olca3.svg'
import olcha4 from '../../../assets/olca4.svg'
function OlchaDropdown({bosil, setBosil}) {
  return (
    <div
      onClick={() => {
        setBosil(bosil === false ? true : false);
      }}
      className=" w-56 rounded-xl p-3   border border-red-500"
    >
      {bosil === false ? (
        <div className="cursor-pointer flex items-center gap-5">
          <img src={olcha} alt="" />
          <p className="text-red-500">Olcha Market ▽</p>
        </div>
      ) : (
        <div className="cursor-pointer">
          <div className="mb-2 flex items-center gap-5">
            <img src={olcha} alt="" />
            <p className="hover:text-red-500 text-lg" >Olcha Market △</p>
          </div>
          <div className="mb-2 flex items-center gap-5">
            <img src={olcha2} alt="" />
            <p className="hover:text-red-500 text-lg">Olcha Nasiya</p>
          </div>
          <div className="mb-2 flex items-center gap-5">
            <img src={olcha3} alt="" />
            <p className="hover:text-red-500 text-lg">Olcha ERP</p>
          </div>
          <div className="mb-2 flex items-center gap-5">
            <img className="w-10" src={olcha4} alt="" />
            <p className="hover:text-red-500 text-lg">Olcha B2B</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OlchaDropdown;
