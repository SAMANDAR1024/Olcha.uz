import axios from "axios";
import React, { useEffect, useState } from "react";

function Section() {
    const [dumalo, setDumalo]=useState([])

    useEffect(()=>{
        axios.get("https://mobile.olcha.uz/api/v2/categories ").then((res)=>{
            setDumalo(res.data.data.categories.slice(0,9))
            console.log(res.data.data.categories);
            
        })
    },[])
  return (
    <div className="flex items-center gap-3 container mx-auto ">
        <div className="flex gap-5 container mx-auto px-6 ">
            {dumalo.map(item=>(
                <div className="my-10 w-38 cursor-pointer hover:text-red-400 ">
                    <img  className=" border-t-2 border-b-8 border-l-4 border-r-4 border-red-400 rounded-full  mx-auto  w-[90px] h-auto" src={item.main_image} alt="" />
                    <p className="text-center mt-2 font-bold">{item.name_oz}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Section;
