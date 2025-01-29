import Input from "./Input";
import Katalog from "./Katalog/Katalog";
import NavbarButtons from "./NavbarButtons";
import OlchaLogo from "./OlchaLogo";
function Navbar() {
  return (
    <div className="flex items-center justify-center gap-14 p-8 relative">
      <div className="flex items-center gap-10 ">
        <OlchaLogo />
        <Katalog />
      </div>
      <Input />
      <NavbarButtons />
    </div>
  );
}

export default Navbar;
