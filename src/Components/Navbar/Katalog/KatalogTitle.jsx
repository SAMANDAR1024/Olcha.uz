import React, { useState } from "react";
import OlchaDropdown from "./OlchaDropdown";
import Overflow1 from "./Overflow1";
function KatalogTitle() {
  const [bosil, setBosil] = useState(false);

  return (
    <div className="p-10 absolute bg-white  w-full container mx-auto top-28 -translate-x-52  z-20   ">
      <div className=" flex items-center gap-10">
        <div className="flex flex-col">
          <OlchaDropdown bosil={bosil} setBosil={setBosil} />
          <Overflow1 />
        </div>
        <div className="w-full h-[500px] overflow-auto  grid grid-cols-3 items-center gap-10 flex-wrap">
          <div>
            <h1 className="text-xl font-bold mb-5">O‘quv qurollari</h1>
            <p className="mb-3 " >Maktab sumkalari va ryukzaklari</p>
            <p className="mb-3 " >Penallar</p>
            <p className="mb-3 " >Chizmachilik to‘plamlari</p>
            <p className="mb-3 " >Geometrik chizg‘ichlar</p>
            <p className="mb-3 " >Doskalar va aksessuarlar</p>
            <p className="mb-3 " >Stollar va aksessuarlar</p>
            <p className="mb-3 " >Daftar va kitoblar uchun qoplamalar</p>
            <p className="mb-3 " >Plastilinlar</p>
            <p className="mb-3 " >Globuslar</p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-5">Yozish uchun</h1>
            <p className="mb-3 " >Maktab sumkalari va ryukzaklari</p>
            <p className="mb-3 " >Penallar</p>
            <p className="mb-3 " >Chizmachilik to‘plamlari</p>
            <p className="mb-3 " >Geometrik chizg‘ichlar</p>
            <p className="mb-3 " >Doskalar va aksessuarlar</p>
            <p className="mb-3 " >Stollar va aksessuarlar</p>
            <p className="mb-3 " >Daftar va kitoblar uchun qoplamalar</p>
            <p className="mb-3 " >Plastilinlar</p>
            <p className="mb-3 " >Globuslar</p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-5">Barchasi chizish uchun</h1>
            <p className="mb-3 " >Maktab sumkalari va ryukzaklari</p>
            <p className="mb-3 " >Penallar</p>
            <p className="mb-3 " >Chizmachilik to‘plamlari</p>
            <p className="mb-3 " >Geometrik chizg‘ichlar</p>
            <p className="mb-3 " >Doskalar va aksessuarlar</p>
            <p className="mb-3 " >Stollar va aksessuarlar</p>
            <p className="mb-3 " >Daftar va kitoblar uchun qoplamalar</p>
            <p className="mb-3 " >Plastilinlar</p>
            <p className="mb-3 " >Globuslar</p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-5">Ofis uchun buyumlar</h1>
            <p className="mb-3 " >Maktab sumkalari va ryukzaklari</p>
            <p className="mb-3 " >Penallar</p>
            <p className="mb-3 " >Chizmachilik to‘plamlari</p>
            <p className="mb-3 " >Geometrik chizg‘ichlar</p>
            <p className="mb-3 " >Doskalar va aksessuarlar</p>
            <p className="mb-3 " >Stollar va aksessuarlar</p>
            <p className="mb-3 " >Daftar va kitoblar uchun qoplamalar</p>
            <p className="mb-3 " >Plastilinlar</p>
            <p className="mb-3 " >Globuslar</p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-5">Qog‘oz mahsulotlari</h1>
            <p className="mb-3 " >Maktab sumkalari va ryukzaklari</p>
            <p className="mb-3 " >Penallar</p>
            <p className="mb-3 " >Chizmachilik to‘plamlari</p>
            <p className="mb-3 " >Geometrik chizg‘ichlar</p>
            <p className="mb-3 " >Doskalar va aksessuarlar</p>
            <p className="mb-3 " >Stollar va aksessuarlar</p>
            <p className="mb-3 " >Daftar va kitoblar uchun qoplamalar</p>
            <p className="mb-3 " >Plastilinlar</p>
            <p className="mb-3 " >Globuslar</p>
          </div>
          <div>
            <h2 className="mb-10 text-xl font-bold"> Maktab to‘plamlari</h2>
            <h2 className="mb-10 text-xl font-bold">O‘qituvchilar uchun texnikalar</h2>
            <h2 className="mb-10 text-xl font-bold">Fotoalbom va ramkalar</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KatalogTitle;
