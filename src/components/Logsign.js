import React, { useState } from 'react'
import './Logsign.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Logsign() {

    const[log,  Setlog]=useState(false)
    const navigate = useNavigate()
    const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
  })

  const sub = async(e) => {
    e.preventDefault()
     axios.post("http://localhost:3001/api/Signuproute/createuser", data).then((resp) => {
    //   setData(ress.data)

        console.log('res',resp.data)

     })
     
     navigate("/logsign")
}
// for login

const [data1, setData1] = useState({
  email: "",
  password: "",
})


const sub1 = async(e) => {
  
  e.preventDefault()
   axios.post("http://localhost:3001/api/Signuproute/login", data1, {withCredentials : true}).then((resp, rej) => {
  //   setData(ress.data)
  navigate("/")
      if(!resp) {
      alert('please enter valid email or password')
      }
   })
  }





    const gotosignup=()=>{
        Setlog(true)
    }
    const gotolog =()=>{
        Setlog(false)
    }
  return (
    <>

<div className="con4">
<div className="container">
    <div className="row">
        <div className="col-8 col-md-9 col-lg-5 mx-auto con3 mt-14">
      
<ul className="nav nav-pills nav-justified mb-2" id="ex1" role="tablist">
  <li className="nav-item   " role="presentation">
    <a
      className="nav-link cursor-pointer text-black logbtn"
      id="tab-login"
      data-mdb-pill-init
    //   href="#pills-login"
    onClick={gotolog}
      role="tab"
      aria-controls="pills-login"
      aria-selected="true"
      >Login</a>
  </li>
  <li className="nav-item  " role="presentation">
    <a
      className="nav-link cursor-pointer text-black rounded-3xl font-bold logbtn"
      id="tab-register"
      data-mdb-pill-init
    //   href="#pills-register"
      role="tab"
      aria-controls="pills-register"
      aria-selected="false"
      onClick={gotosignup}
      >Register</a>
  </li>
</ul>

<div className="tab-content">
  <div
    className="tab-pane fade show active"
    id="pills-login"
    role="tabpanel"
    aria-labelledby="tab-login"
  >{ !log &&
    <form onSubmit={sub1}  className='font-bold'>
      <div className="text-center mb-3 text-black">
        <p>Sign in with:</p>
        <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
          <i className="fab fa-facebook-f text-black"></i>
        </button>

        <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
          <i className="fab fa-google text-black"></i>
        </button>

        <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
          <i className="fab fa-twitter text-black"></i>
        </button>

        <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
          <i className="fab fa-github text-black"></i>
        </button>
      </div>

      <p className="text-center">or:</p>

      <div data-mdb-input-init className=" mb-4 ">
        
        <label className="form-label text-black" htmlFor="email">Email</label>
        <input type="email" id="email" name='email' className="form-control" onChange={(e) => 
                        setData1({...data1, [e.target.name]: e.target.value })} />
      </div>

 
      <div data-mdb-input-init className=" mb-4">
        
        <label className="form-label text-black" htmlFor="password">Password</label>
        <input type="password" id="password" name='password' className="form-control" onChange={(e) => 
                        setData1({...data1, [e.target.name]: e.target.value })}/>
      </div>

     
      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">
   
        </div>

        <div className="col-md-6 d-flex text-black justify-content-center">
      
          <a href="#!">Forgot password?</a>
        </div>
      </div>

   
      <div className="col-lg-12 flex justify-content-center">
<button data-mdb-ripple-init type="submit" className="col-lg-11 btn btn-light mb-2 mt-2 text-black font-extrabold rounded-3xl bg-orange-600">Sign in</button>

</div>
 
      <div className="text-center text-black">
        <p>Not a member? <a href="#!" onClick={gotosignup}>Register</a></p>
      </div>
    </form>
}

{ log &&
    <form  onSubmit={sub} className='text-black font-bold'>
      <div className="text-center mb-3 ">
        <p>Sign up with:</p>
        <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
          <i className="fab fa-facebook-f text-black"></i>
        </button>

        <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
          <i className="fab fa-google text-black"></i>
        </button>

        <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
          <i className="fab fa-twitter text-black"></i>
        </button>

        <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
          <i className="fab fa-github text-black"></i>
        </button>
      </div>

      <p className="text-center">or:</p>

   
      <div data-mdb-input-init className=" mb-4">
        
        <label className="form-label text-black" htmlFor="name">Name</label>
        <input type="text" id="name" name='name' className="form-control" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value })}  />

      </div>


 
      <div data-mdb-input-init className=" mb-4">
        
        <label className="form-label text-black" htmlFor="email">Email</label>
        <input type="email" id="email" className="form-control" name='email' onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value })}  />
      </div>

   
      <div data-mdb-input-init className=" mb-5">
   
        <label className="form-label text-black" htmlFor="password">Password</label>
        <input type="password" id="password" className="form-control" name='password' onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value })} />
      </div>

{/* 
      <div className="form-check d-flex justify-content-center mb-4">
        <input
          className="form-check-input me-2"
          type="checkbox"
          value=""
          id="registerCheck"
          checked
          aria-describedby="registerCheckHelpText"
        />
        <label className="form-check-label text-black" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div> */}
<div className="col col-lg-12  flex justify-content-center">
<button data-mdb-ripple-init type="submit" className=" col-lg-11 btn btn-light mb-4 mt-2 text-white font-extrabold rounded-3xl bg-orange-600">Sign in</button>

</div>
   
    {/* btn-block use for full width of btn */}
    </form>
 }
  </div>

 
</div>

   

        </div>
    </div>
</div>
</div>


    </>
  )
}
