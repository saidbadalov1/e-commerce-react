import React from 'react'
import { ProductApi as TopProducts } from '../apifolder/ProductApi'
import Product from './Product'

function Products({cartItems, setCartItems}) {
  return (
    <div className='justify-center items-center mt-20 h-[100%]'>
      <h1 className='text-center text-bold text-[70px] mobile:text-[30px]'>TOPS 🔥</h1>
      <div className='grid grid-cols-3 mobile:grid-cols-1 gap-5 justify-center items-center h-[100%]'>
        {
          TopProducts.map((product, index) => (
            <Product cartItems={cartItems} setCartItems={setCartItems}  item={product} index={index} key={index}/>
          ))
        } 
        </div>
    </div>
  )
}

export default Products