import React, { useState } from 'react'
import Announce from '../components/Announce'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Subscribe from '../components/Subscribe'

function Home() {

    const [cartItems, setCartItems] = useState(0)

  return (
    <div>
        <Announce/>
        <Navbar cartItems={cartItems} setCartItems={setCartItems} />
        <Slider/>
        <Categories/>
        <Products cartItems={cartItems} setCartItems={setCartItems} />
        <Subscribe/>
    </div>
  )
}

export default Home