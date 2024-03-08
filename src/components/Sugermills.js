import React from 'react'
import Navbar from './Navbar'
import './Sugermills.css'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Sugermills() {

  const navigate = useNavigate()
  const gotoanalysis=()=>{

    navigate("/analysis")
  }
  return (
    <>
    <div className="con h-100">
    <Navbar/>

<button className=' bg-orange-500 rounded-full absolute bbn mt-72 flex justify-content-center' data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-bar-chart-fill mt-3 text-gray-600 font-bold text-lg"></i></button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-footer">
        <label htmlFor="">enter unique Id</label>
      <input type="text" placeholder='enter code' className='border-2'/>
      <button type="cancel" class="btn btn-dark w-30" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-dark" onClick={gotoanalysis}>Ok</button>
      </div>
    </div>
  </div>
</div>




  <div className="container-fluid ">
    <div className="row mt-18  ">
        <div className="col-12 col-lg-12 col-md-12 col-sm-12 flex justify-content-between my-12 h-fit rounded-3xl ">
        <button className=' btn btn-dark me-1 glowingbtn  '>
          <span className='glowing-txt'>A
            <span className='faulty-lette'>
              pp
            </span>lication/job
          </span>     
         </button>
        <div className="dropdown ">
  <button className="dropbtn rounded-full mb-2 h-14 w-14 flex justify-content-center"><i className="bi bi-chevron-down text-medium font-black "></i></button>
  <div className="dropdown-content rounded-3xl ">
    <a href="#">ID Cleaning</a>
    <a href="#">OD Cleaning</a>
    <a href="#">Vessel Cleaning</a>
    <a href="#">Tank Cleaning</a>
  </div>
</div>
</div> 

        
 <NavLink to="https://m.economictimes.com/small-biz/sme-sector/government-lifting-restriction-on-sugarcane-use-raises-hope-of-sugar-mills/amp_articleshow/106114175.cms " className="card rounded-3xl  noteoncard  noteoncard1 col-9 col-lg-3 col-md-3 col-sm-10 col-xs-10 my-4 bg-white mx-5">
      <div className="card-body">
        <h5 className="card-title font-bold text-black text-medium">Government lifting restriction on sugarcane use raises hope of sugar mills</h5>
        <p className="card-text font-bold text-black"></p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>


</NavLink>     
 <div className="card  noteoncard noteoncard2 col-9 col-lg-3 col-md-3 col-sm-10 col-xs-10 my-4 rounded-3xl bg-white mx-5">
      <div className="card-body">
        <h5 className="card-title font-bold text-black text-medium">With supporting text below as a natural lead-in to additional content</h5>
        <p className="card-text font-bold text-black"></p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>


</div>
 <div className="card rounded-3xl   noteoncard noteoncard3 col-9 col-lg-3 col-md-3 col-sm-10 col-xs-10 my-4 bg-white mx-5">
      <div className="card-body">
        <h5 className="card-title font-bold text-black text-medium">With supporting text below as a natural lead-in to additional content.</h5>
        <p className="card-text font-bold text-black"></p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
     


      </div>
</div>
</div>

<footer className="page-footer font-small cyan darken-3 px-0">
    <div className="row bg-gray-200 mt-24">     
      <div className="col-md-12 col-lg-12 col-sm-12 pt-12 my-10">
      <div class="mb-4 flex justify-center">      
        <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
          <i className="fab fa-facebook-f text-black font-bold"></i>
        </button>

        <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
          <i className="fab fa-google text-black font-bold"></i>
        </button>

        <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
          <i className="fab fa-twitter text-black font-bold"></i>
        </button>

        <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
          <i className="fab fa-github text-black font-bold"></i>
        </button> 
          
        </div>
      </div>
    </div>
  <div className="footer-copyright text-center py-3 font-thin text-xs text-black">© 2023 Copyright:
    <a href="/" className='me-2'> NutechGroup.com</a>
    <span>contact on +91129-2421221 </span>
  </div>
</footer>
</div>
  </div>

 </>
  )
}
