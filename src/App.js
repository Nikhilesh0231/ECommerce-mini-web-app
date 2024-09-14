import axios from 'axios';
import './App.css';
import Category from './Category';
import Product from './Product';
import { useEffect, useState } from 'react';

function App() {
  let [finalCategory,setFinalCategory]=useState([])
  let [finalProduct,setFinalProduct]=useState([])
  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalres)=>{
      setFinalCategory(finalres)
    })
  }
  let getProduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>res.data)
    .then((finalres)=>{ 
      setFinalProduct(finalres.products)
      })
  }
    useEffect(()=>{
      getCategory();
      getProduct();
    },[])
  return (
    <><div className='py-[40px]'>
      <div className="max-w-[1320px] mx-32">
        <h1 className='text-center font-bold text-4xl mb-8 text-yellow-300'>Our Products</h1>
        <div className='grid grid-cols-[25%_auto] gap-5'>
          <div>
            
           <Category setFinalProduct={setFinalProduct} finalCategory={finalCategory}/>            
          </div>
          <div>
            <Product  finalProduct={finalProduct}/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
