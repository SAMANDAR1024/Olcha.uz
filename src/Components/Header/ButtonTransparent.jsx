function ButtonTransparent({ children }) {
  return (
    <button className="bg-transparent cursor-pointer p-1 px-2 rounded-lg transition-all duration-700 hover:bg-white hover:text-red-500 border border-white text-white     ">
      {children}
    </button>
  );
}

export default ButtonTransparent;
