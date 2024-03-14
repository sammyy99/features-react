import React from 'react'

const Dishes = ({dish,showDish,setShowDish}) => {

    const handleDish = ()=>{
       setShowDish()
    }

  return (
    <div className='text-center'>
      <button className='py-1 px-3 m-2 border' onClick={handleDish}>Click to see dish</button>
      {showDish?<p>{dish}</p>:"" } 
    </div>
  )
}

export default Dishes
