import Buttons from "./Buttons";
import ButtonStyle from "./ButtonStyle";
import ButtonTransparent from "./ButtonTransparent";
import Lange from "./Lange";

function Header() {
  return (
    <div className="bg-red-500">
      <div className="container  flex items-center justify-between mx-auto px-6 ">
        <Buttons>
          <ButtonStyle>0% Muddatli To'lov</ButtonStyle>
          <ButtonTransparent>Chegirmalar</ButtonTransparent>
          <ButtonStyle>Yutuqli O'yinlar</ButtonStyle>
          <div className="text-white ml-8 cursor-pointer hover:text-red-300 transition-all duration-700">Sayt Xaritasi</div>
        </Buttons>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <p className="text-white font-bold text-xl">+998 (71) 202 202 1</p>
            <ButtonTransparent>Olchada Soting</ButtonTransparent>
          </div>
          <Lange />
        </div>
      </div>
    </div>
  );
}

export default Header;
