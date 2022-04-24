import { EmailOutlined } from '@material-ui/icons'
import React from 'react'

function Subscribe() {
  return (
    <div className='newsletter flex justify-between items-center bg-black h-[300px] text-white p-5'>
        <div className="leftS flex-1 p-5 w-[50%]">
            <h1 className='text-bold text-xl mobile:text-xs mb-5 mobile:mb-0'>SAID</h1>
            <h1 className='mobile:text-[10px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt veniam provident amet ipsa delectus excepturi eligendi, aspernatur repellat temporibus animi explicabo, sint voluptates. Veniam explicabo in iusto quae quaerat.
            </h1>
        </div>
        <div className="rightS flex-1 p-5 items-center justify-center text-center">
        <h1 className='mb-2 font-bold text-[25px] mobile:text-[12px]'>We send to new products to your email!</h1>
            <input placeholder='Email' className=' p-2 input rounded-xl w-[40%] mobile:w-[100%]' type="text" /> <br />
            <button className='bg-[#8a4af3] mt-3 p-2 rounded-xl font-bold text-[15px] mobile:p-1 mobile:text-[10px]' >SUBSCRIBE US <EmailOutlined/></button>
        </div>
    </div>
  )
}

export default Subscribe