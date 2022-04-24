import React, { useState } from 'react'
import { CategoryApi } from '../apifolder/CategoryApi'
import Category from './Category'

function Categories() {
    const [Categories] = useState(CategoryApi)

  return (
    <div className="flex justify-between items-center p-5">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>

        {
            Categories.map((category, index) => {
                return <Category item={category} key={index}/>
            })
        }
    </div>
  )
}

export default Categories