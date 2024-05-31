import React from 'react'

const Prayer = ({name,time}) => {
  return (
    <div className=' '>
        

<div className='   w-[345px] h-[456px] text-black bg-white ' >
<img src="src/assets/fajr-prayer (2).png" alt="" />

<div className=''>
    <h1>{name}</h1>
    
    <p className=' text-center my-3 text-3xl '>{time}</p>
    
</div>
</div>





    </div>
  )
}

export default Prayer