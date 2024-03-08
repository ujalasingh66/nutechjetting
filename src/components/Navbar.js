import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Navbar() {
const [data , setData]=useState([])
const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const navigate =useNavigate()

  useEffect(() => {
    gett()
}, [data.email])
const gett = async() => {
  try{ const ress = await axios.get("http://localhost:3001/api/Signuproute/get",  {withCredentials: true} )
    setData(ress.data)
    console.log(ress.data)
  
} catch {
  //  navigate("/logsign")
}
}
const logoutt = () => {
    axios.get("http://localhost:3000/api/Loginreg/logout", {withCredentials : true})
    navigate("/login")

  }
  
  return (
    <>
    <div className="container-fluid mx-0 px-0 py-0">
    <div class="row m-0 p-0">
    <nav className="navbarmain fixed-top bg-body-dark  mt-0 pt-0 col-12 col-sm-12 col-md-12 col-lg-12 ">
<div className=' col-12 col-sm-12 col-md-12 col-lg-12 flex justify-content-between mt-4  secs1'>
<div className="dropdown  w-12 mx-3 ">
        <a className='flex '>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="19"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
         <div className=' '>
         <h1 className='font-extrabold text-2xl mt-2 mx-1 text-black'>{data.name}</h1>
         </div>
        </a>      
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
             
        <li><NavLink to="/suphome">Supervisor</NavLink></li>

        {/* <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-black  font-medium rounded-lg text-sm  text-center " type="button">
<li>Supervisor</li>
</button>
<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-60 md:inset-0 h-[calc(40%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">     
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            </div>          
            <div class="p-4 md:p-5">
                <form class="space-y-4" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Contact</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    </div>                   
                    <div class="flex justify-between">                    
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={gotocalcu}>Login to your account</button>
                   
                </form>
            </div>
        </div>
    </div>
</div>  */}
</ul>
</div>
</div>
<div className='col-sm-12 col-md-8 col-10 col-lg-8 secs2 mx-auto mt-16'>
 <div className='flex  my-2'>
 <h1 className='font-black text-white text-4xl my-2 '>How can we<br/> help you ?</h1>
 </div>
<input className="  form-control  rounded-3xl  p-2" type="search" placeholder="Search" aria-label="Search"/>      
</div>
</nav>
</div>
</div>
    </>
  )
}
