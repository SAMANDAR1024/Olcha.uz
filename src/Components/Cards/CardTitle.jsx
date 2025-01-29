import React, { useEffect, useState } from "react";
import Yulduz from "../../assets/yulduz.svg";
import Analytics03Icon from "../../assets/Tradin";
import Max from "../../assets/15Max.png";
import ButtonGb from "./ButtonGb";
import Apple from "../../assets/apple.jpg";
import axios from "axios";
import { useParams } from "react-router";
function CardTitle() {
  const [title, setTitle] = useState([]);
  const { alias } = useParams();
  useEffect(() => {
    axios
      .get(`https://mobile.olcha.uz/api/v2/products/view?alias=` + alias)
      .then((res) => {
        setTitle(res.data.data.product);
        console.log(res.data.data.product);
      });
  }, []);
  return (
    <div className="container mx-auto px-6">
      <div className="flex items-center gap-5 mb-7">
        <p className="text-red-400 hover:text-black cursor-pointer transition-all duration-700 ">
          Asosiy /
        </p>
        <p className="text-red-400 hover:text-black cursor-pointer transition-all duration-700 ">
          Smartfon, telefon, gadjet, aksessuarlar /
        </p>
        <p className="text-red-400 hover:text-black cursor-pointer transition-all duration-700 ">
          Smartfonlar
        </p>
      </div>
      <h1 className="text-4xl font-bold mb-3">{title.name_uz}</h1>
      <div className="flex justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <img src={Yulduz} alt="" />
            <img src={Yulduz} alt="" />
            <img src={Yulduz} alt="" />
            <img src={Yulduz} alt="" />
            <img src={Yulduz} alt="" />
          </div>
          <p className="hover:text-red-400 cursor-pointer">0 sharxlar</p>
        </div>
        <div className="flex items-center gap-6  ">
          <div className="flex items-center cursor-pointer gap-2 text-red-400 hover:text-black">
            <Analytics03Icon />
            <p>Taqqoslashga Qoshish</p>
          </div>
          <div className="flex items-center cursor-pointer gap-2 text-red-400 hover:text-black">
            <Analytics03Icon />
            <p>Taqqoslashga Qoshish</p>
          </div>
          <div className="flex items-center cursor-pointer gap-2 text-red-400 hover:text-black">
            <Analytics03Icon />
            <p>Taqqoslashga Qoshish</p>
          </div>
        </div>
      </div>

      <div className="flex  gap-8 mt-8">
        <img
          className="w-[460px] h-[460px] rounded-xl"
          src={title.main_image}
          alt=""
        />
        <div className="w-[500px] flex flex-col gap-2">
          <p className="text-gray-400">Doimiy xotira hajmi:</p>
          <div className="flex gap-2 items-center">
            <ButtonGb>512 GB</ButtonGb>
            <ButtonGb>256 GB</ButtonGb>
            <ButtonGb>1 TB</ButtonGb>
          </div>
          <p className="text-gray-400">Rangi:</p>
          <div className="flex items-center gap-2">
            <img
              className="w-20 border-2 p-1 border-black rounded-lg"
              src={Apple}
              alt=""
            />
            <img
              className="w-20 border-2 p-1 border-black rounded-lg"
              src={Apple}
              alt=""
            />
            <img
              className="w-20 border-2 p-1 border-black rounded-lg"
              src={Apple}
              alt=""
            />
            <img
              className="w-20 border-2 p-1 border-black rounded-lg"
              src={Apple}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex">
              <div className="flex w-[300px]">
                <p className="text-gray-400">O'lchami</p>
                <p className="text-gray-400 w-auto">
                  ......................................................................
                </p>
              </div>

              <p>159.9x76.7x8.25mm</p>
            </div>
            <div className="flex">
              <div className="flex w-[300px]">
                <p className="text-gray-400">Vazni</p>
                <p className="text-gray-400 w-auto">
                  ............................................................................
                </p>
              </div>

              <p>221 g</p>
            </div>
            <div className="flex">
              <div className="flex w-[300px]">
                <p className="text-gray-400">Face ID Datchigi</p>
                <p className="text-gray-400 w-auto">
                  .....................................................
                </p>
              </div>

              <p>Mavjud</p>
            </div>
            <div className="flex">
              <div className="flex w-[300px]">
                <p className="text-gray-400">Operatsion sistema versiyasi</p>
                <p className="text-gray-400 w-auto">
                  ............................
                </p>
              </div>

              <p>iOS 17</p>
            </div>
            <div className="flex">
              <div className="flex w-[300px]">
                <p className="text-gray-400">Rangi</p>
                <p className="text-gray-400 w-auto">
                  ...........................................................................
                </p>
              </div>

              <p>Natural titanium</p>
            </div>
            <div className="flex">
              <div className="flex w-[300px]">
                <p className="text-gray-400">Rang</p>
                <p className="text-gray-400 w-auto">
                  ...........................................................................
                </p>
              </div>

              <p>Blue titanium</p>
            </div>
            <div className="flex">
              <div className="flex w-[300px]">
                <p className="text-gray-400">Rang</p>
                <p className="text-gray-400 w-auto">
                  ...........................................................................
                </p>
              </div>

              <p>White titanium</p>
            </div>
            <div className="flex">
              <div className="flex w-[300px]">
                <p className="text-gray-400">Rang</p>
                <p className="text-gray-400 w-auto">
                  ...........................................................................
                </p>
              </div>

              <p>Black titanium</p>
            </div>
            <div className="flex">
              <div className="flex w-[300px]">
                <p className="text-gray-400">Namlikdan chimoya</p>
                <p className="text-gray-400 w-auto">
                  ..............................................
                </p>
              </div>

              <p>Mavjud, IP68</p>
            </div>
            <p className="text-blue-400 cursor-pointer">
              Barcha Xususiyatlarini Ko'rish
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[380px] h-auto p-4 border-2 border-gray-200 rounded-xl">
          <h2 className="font-bold text-3xl font-sans">{title.total_price} so'm</h2>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-400">
              Yetkazib berish to'g'risida ma'lumot:
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTitle;
