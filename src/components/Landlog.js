import React from 'react'
import nute from '../assets/nute.png'
import './Landlog.css'
import { NavLink } from 'react-router-dom'

export default function Landlog() {
  return (
    <>

 <div className="container-fluid  m-0">
      <div className="row  flex justify-between">
       <nav className="divmain fixed-bottom bg-body-dark  bottom-0">
</nav>
        <div className="col-12 col-lg-5 col-md-12 col-sm-12 mt-10  flex justify-content-center ">      
          <img className='col-9 col-md-5 col-lg-8 col-sm-10 mt-8 p-0 mx-0 image' src={nute} alt="" />
        </div>  
 <div className="col-12 col-lg-6 col-md-12 col-sm-12 mt-20 columsecond  flex justify-content-center">
     
<div class="relative p-4 w-full max-w-md max-h-full">
        
        <div class="relative bg-white rounded-3xl shadow  divform">
      
            {/* <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 ">
                    Sign in to our platform
                </h3>
                <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div> */}
           
            <div class="p-4 md:p-5">
                <form class="space-y-4" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-bold text-gray-900 dark:text-black">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-bold  text-gray-900 dark:text-black">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 f block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600  dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <NavLink to="/suphome" type="submit" class="w-full text-white   focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-medium px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-gray-600 dark:focus:ring-blue-800 rounded-3xl">Login </NavLink>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-400 flex justify-content-center">
                        Not registered as User? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    </div>  
          
     </div>
  

        
      </div>
    </div>


    </>
  )
}
