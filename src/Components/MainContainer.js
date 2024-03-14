import React, { useState } from 'react'
import Dishes from './Dishes'
import {dishes} from '../Utils/Constants'

const MainContainer = () => {

    const [showDish , setShowDish] =  useState(0)

  return (
    <div className='flex w-full justify-center p-20'>
     {dishes.map((elem,i)=>{
        return <Dishes dish ={elem} showDish={showDish === i? true : false}  setShowDish={()=>setShowDish(i)}/>
     })}
    </div>
  )
}

export default MainContainer
