
function ButtonStyle({children}) {
  return (
    <button className="bg-white cursor-pointer  p-1 px-2 rounded-lg transition-all duration-700 hover:bg-transparent hover:text-white border border-white text-red-500 ">
    {children}
  </button>
  )
}

export default ButtonStyle