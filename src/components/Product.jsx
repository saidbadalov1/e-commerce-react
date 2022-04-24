import { AddShoppingCartOutlined } from '@material-ui/icons'
import React, { useState } from 'react'

function Product({ item, index, cartItems, setCartItems }) {

    const [hover, setHover] = useState(0);

    const handleHoverEnter = () => {
        setHover(1)
    }
    const handleHoverLeave = () => {
        setHover(0)
    }

    return (
        <div key={index} onMouseLeave={handleHoverLeave} onMouseEnter={handleHoverEnter} className='flex flex-col w-[300px] mt-12 items-center text-center mb-0 ml-[auto] mr-[auto] justify-center cursor-pointer'>
            <img className={`h-[400px] rounded-md shadow-xl`} src={item.src} alt={item.title} />
            <h1 className='mt-5'>{item.title}</h1>
            <h1 className='mb-2'>{item.price}</h1>
            <div className={`absolute bg-white rounded-xl opacity-${hover}`}>
                <div className="flex bg-gray-300 rounded-lg h-[30px] items-center">
                    <span className='text-black'>
                        <select className="ml-5 mr-5 outline-none border-none w-[50px] rounded-md " >
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </span>
                    <AddShoppingCartOutlined onClick={(e) => setCartItems(cartItems += 1)} className='text-black ml-[5px] mr-2' />
                </div>
            </div>
        </div>
    )
}

export default Product