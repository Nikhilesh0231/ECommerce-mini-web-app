import React from 'react'

export default function Item({product}) {
  console.log(product);
  return (
    <div className='shadow-lg text-center pb-4 bg-pink-400 text-yellow-200 '>
      <img src={product.thumbnail} className='w-[100%] h-[200px]' alt="img" />
      <h4>{product.title}</h4>
      <b>{product.price}</b>
    </div>
  )
}
