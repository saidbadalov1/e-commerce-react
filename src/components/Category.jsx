import { Button } from '@material-ui/core';
import React from 'react';

const Category = ({item}) => {

  return (<div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
      <img src={item.src} className="w-[30%] mobile:w-[100%]" alt='category_img'/>
      <div className='flex absolute w-[100%] h-[100%] mobile:w-[200px] mobile:h-[100%] left-0 top-0 mobile:left-[-13px]  items-center justify-center flex-col'>
          <h2 className='text-black font-extrabold text-[30px] mobile:text-[18px] mobile:font-normal mobile:text-white'>{item.title}</h2>
          <Button variant="outlined" >See more</Button>
      </div>
  </div>)
};

export default Category;