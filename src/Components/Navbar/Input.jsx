import Search01Icon from "../../assets/search-01-stroke-rounded";

function Input() {
  return (
    <div className="flex items-center bg-gray-200 rounded-lg w-[700px]">
      <input className="w-full p-3 outline-0 rounded-lg " type="text" placeholder="Katalog Bo'yicha Qidirish"/>
      <button className="cursor-pointer w-20 flex justify-center bg-red-500 p-3 rounded-lg text-white ">
        <Search01Icon />
      </button>
    </div>
  );
}

export default Input;
