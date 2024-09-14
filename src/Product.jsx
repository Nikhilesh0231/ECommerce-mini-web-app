import React from 'react'
import Item from './Item'

export default function Product({finalProduct}) {
  let Pitems = finalProduct.map((v,i)=>{
    return <Item key={i} product={v} />
  })
  return (
    <div className='bg-red-500'>
      <div className="grid grid-cols-3 gap-5 p-4">
        {finalProduct.length >= 1
        ?
        Pitems
      :
        'No Product found'}
      </div>
    </div>
  )
}
