import React from 'react'
import './Bottomnav.css'
import { NavLink } from 'react-router-dom'

export default function Bottomnav() {
  return (
    <>
   <div   className="container-fluid">      
   <div className="row">
   <nav   className="navbar fixed-bottom bg-light navbackground ">
   <div className="col-12 flex justify-between">
  <div className='mx-2 '>
 <i   className="bi bi-people-fill ml-4  bg-orange-500 rounded-full py-2.5 px-2.5"></i><br/>
  <span className='text-xs'><NavLink to="/suphome">Attendance</NavLink></span>
  </div>
  <div className='mx-1 '>
  <i className="bi bi-truck ml-1 bg-orange-500 rounded-full py-2.5 px-2.5"> </i><br/>
  <span className='text-xs'><NavLink to="/material">Material</NavLink></span>
  </div>
  <div className='mx-2'>
  <i className="bi bi-clipboard-check ml-5 bg-orange-500 rounded-full py-2.5 px-2.5"></i><br/>
  <span className='text-xs'><NavLink to="/workupdate">Work Update</NavLink></span>
  </div>

  </div>
</nav>
            </div>
        </div>





      {/* forms */}
      {/* <form>
        <div  className="card" >
  <div  className="card-body ">
  <div>
  <label htmlFor="name"  className="block mb-2 text-sm font-bold  text-gray-900 dark:text-black">Labour Name</label>
   <input type="text" name="namepassword" id="name"   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 f block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required/>
  </div>
  <div className=' flex justify-between my-3'>
    <button className='border-2	border-stone-500	px-4 rounded-2xl py-1 text-sm' onClick={handleClick1}>Present</button>
    <button className='border-2	border-stone-500 px-4 rounded-2xl py-1 text-sm	'>Half Day</button>
    <button className='border-2	border-stone-500 px-4 rounded-2xl py-1 text-sm	' >Absent</button>

  </div>
  <div className='my-2'>
  <button type="submit" className="w-full text-gray-800   focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-medium px-5 py-2 text-center border-2 bg-blue-500 rounded-3xl"> <i className="bi bi-plus"></i>Add Labour </button>

  </div>
  </div>
        </div>
        </form> */}

    </>
  )
}
