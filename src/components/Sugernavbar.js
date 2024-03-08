import React, { useState } from 'react'
import './Sugernavbar.css'
import { NavLink } from 'react-router-dom'
import DatePicker from "react-horizontal-datepicker";

export default function Sugernavbar() {
    const selectedDay = (val) =>{
        console.log(val)
    }

const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <>
    <div className="container-fluid mx-0 px-0 py-0">
    <div class="row m-0 p-0">
    <nav className="navbarmain2 fixed-top bg-body-dark  mt-0 pt-0 col-12 col-sm-12 col-md-12 col-lg-12 ">
<div className=' col-12 col-sm-12 col-md-12 col-lg-12 flex justify-content-between mt-4  secs1'>
  <div className='rounded-3xl bg-white pr-12 mx-2'>
<div className="dropdown w-14 ">
        <a className='flex mt-1 mx-1'>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle rounded-full"
            height="18"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
         <div className=' '>
         <h1 className='font-bold text-large mt-2 mx-1 text-black'>user</h1>
         <span className='font-medium text-sm  mx-1 text-black'>Designation</span>

         </div>
        </a>      
      </div>
      </div>
<div className="menu-icon" onClick={handleShowNavbar}>
<i className=" bi bi-list font-bold text-3xl  mx-3 " ></i>
    </div>
    <div className={`nav-elements  ${showNavbar && 'active'} rounded-3xl mr-6`}>
    <ul className='mx-3'>
        <li >
        <NavLink to="/flow"> About</NavLink>
         </li>
         <li>  
            <NavLink to="/nozzle">Contact</NavLink>
        </li>
        <li><NavLink to="/flow">Career</NavLink></li>
        <li><NavLink to="/logsign">Login</NavLink></li>            
        {/* <li><NavLink onClick={gotocalcu}>Supervisor</NavLink></li> */}
</ul>
</div>
</div>
<div className='col-11 col-sm-12 col-md-8 col-10 col-lg-8 secs2 mx-auto mt-1'>
 <div className='my-1  mx-2'>

 <DatePicker 
   getSelectedDay={selectedDay}
   labelFormat={"MMM-yyyy"}
   color={"#374e8c"}
   enableDaysBefore={5}
   background={"#fff"}
//  getSelectedDay={selectedDay}
//                   endDate={100}
//                   selectDate={new Date("30-04-2020")}
//                   labelFormat={"MMM"}
//                   color={"#374e8c"} 
/>


 </div>
<input className="  form-control  rounded-3xl  p-2 mt-3" type="search" placeholder="Search" aria-label="Search"/>      
</div>
</nav>
</div>
</div>

    </>
  )
}
