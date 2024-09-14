import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Category({finalCategory,setFinalProduct}) {
  let [catName,setCatName]=useState('');

  let cat = finalCategory.map((v, i) => {
    return (
      <li onClick={()=>setCatName(v.name)} key={i} className="px-[17px] py-[10px] cursor-pointer text-[20px] bg-red-400 text-yellow-200 font-serif mb-2">
        {v.name}
      </li> 
    );
  });
    useEffect(()=>{
      if(catName!==""){
        axios.get(`https://dummyjson.com/products/category/${catName}`)
        .then((res)=>res.data)
        .then((finalres)=>{ 
          setFinalProduct(finalres.products)
          })
      }
    },[catName])
  return (
    <div className="bg-red-500 ">
      <h3 className="font-semibold text-xl text-yellow-300 p-3">
        Product Category
      </h3>
      <ul>
        {cat}
      </ul>
    </div>
  );
}
