import { useState } from "react";
import FavouriteIcon from "../../assets/yure";
import qizil from '../../assets/redH.svg'
import qora from '../../assets/blackH.svg'
function Sevimlilar() {
  const [qizartirish, setQiziartirish]=useState(false)
  return (
    <div onClick={()=>{
      setQiziartirish(qizartirish=== false ? true : false)
    }}  className="hover:text-red-400 text-center">
     {qizartirish=== false ? <FavouriteIcon  /> : <img className="w-6 mx-auto" src={qizil}/>}
      
      <p>Sevimlilar</p>
    </div>
  );
}

export default Sevimlilar;
