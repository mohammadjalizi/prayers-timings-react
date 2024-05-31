import React, { useEffect, useState } from 'react'
import Prayer from './Prayer'
import axios from 'axios'
const Maincontext = () => {

  const[timings,Settimings]=useState({


    Fajr: "04:20",
		Dhuhr: "11:50",
		Asr: "15:18",
		Sunset: "18:03",
		Isha: "19:33",

  })
const[selectedcity,Setselected]=useState("الریاض")
  const getTimings=async()=>{
const data= await axios.get("https://api.aladhan.com/v1/timingsByCity/31-05-2024?city=Dubai&country=United+Arab+Emirates&method=8");

Settimings(Response.data.data.timings)
console.log(data.data.data.timings)
  }
useEffect(()=>{

  getTimings()

},[])


const handelcity=(event)=>{


console.log("the new value",event.target.value)
Setselected(event.target.value)

}

  return (
<div className=' '>
        <div className='  flex justify-between gap-44 '>
            
    
    <div>
    <h2>   4.23 |سبتمبر2024 9</h2>
    <h1 className=' text-3xl '> {selectedcity}</h1>
    </div>
    
    <div>
    <h2>    متبقي حتى صلاة العصر</h2>
    <h1 className=' text-3xl '> 00:10:20 </h1>
    </div>
    
    
        </div>

        <hr className=' border-white  opacity-5 my-2 ' />

      
<div className='flex  gap-6 flex-wrap '>

<Prayer name="الفجر" time={timings.Fajr}   image="src/assets/fajr-prayer (2).png" />

<Prayer name="الظهر" time={timings.Dhuhr}  image="src/assets/dhhr-prayer-mosque.png" />

<Prayer name="العصر" time={timings.Asr}  image="src/assets/asr-prayer-mosque.png" />

<Prayer name="المغرب" time={timings.Isha}  image="src/assets/night-prayer-mosque.png" />
</div>


{/* select */}
<form class="max-w-sm mx-auto  ">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
  <select onChange={handelcity} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>المدینه</option>
    <option value="riath">الریاض</option>
    <option value="Damam">الدمام</option>
    <option value="ahwaz">الاهواز</option>
  </select>
</form>


</div>
  )
}

export default Maincontext