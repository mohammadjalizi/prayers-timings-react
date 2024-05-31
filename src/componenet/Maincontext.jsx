import React from 'react'
import Prayer from './Prayer'

const Maincontext = () => {
  return (
<div className=' '>
        <div className='  flex justify-between gap-44 '>
            
    
    <div>
    <h2>   4.23 |سبتمبر2024 9</h2>
    <h1>مکه المکرمه </h1>
    </div>
    
    <div>
    <h2>    متبقي حتى صلاة العصر</h2>
    <h1> 00:10:20 </h1>
    </div>
    
    
        </div>

        <hr className=' border-white  opacity-5 my-2 ' />

      
<div className='flex  gap-6 flex-wrap '>

<Prayer name="الفجر" time="04:10" />

<Prayer name="الظهر" time="12:13"/>

<Prayer name="العصر" time="03:45"/>

<Prayer name="المغرب" time="07:44"/>
</div>

</div>
  )
}

export default Maincontext