import { useState } from "react";
import Menu01Icon from "../../../assets/MenuIcon";
import Cancel01Icon from "../../../assets/x";
import KatalogTitle from "./KatalogTitle";

function Katalog() {
  const [katalog, setKatalog] = useState(false);

  return (
    <div>
      <div className="flex hover:text-red-500 items-center  rounded-lg border-2 p-2 px-6">
        <button
          onClick={() => {
            setKatalog(katalog === false ? true : false);
          }}  
          className="cursor-pointer flex items-center gap-5 text-xl rounded-lg"
        >
          {katalog === false ? <Menu01Icon /> : <Cancel01Icon />} Katalog
        </button>
      </div>
      {katalog && <KatalogTitle />}
    </div>
  );
}

export default Katalog;
