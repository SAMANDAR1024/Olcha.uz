import Cards from "../Cards/Cards";
import Image3ta from "./Image3ta";
import Mahsulot from "./Mahsulot";
import Section from "./Section";
import Slider from "./Slider";

function Main() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-10">
        <Slider />
        <Mahsulot />
      </div>

      <Section />
      <Image3ta/>
      <Cards />
    </div>
  );
}

export default Main;
