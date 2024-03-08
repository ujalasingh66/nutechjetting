import React from 'react'
import Sugernavbar from './Sugernavbar'
import Bottomnav from './Bottomnav'
import Labour from './Labour'
import './Suphome.css'

export default function Suphome() {

  return (
    <>
<Sugernavbar/>
<Bottomnav/>
   <div className="container mr-0">
    <div className="row flex justify-center mr-0 ml-0">
        <div className="col-12 col-lg-12" >
<ul   className="nav nav-tabs flex justify-content-between mx-2" id="myTab" role="tablist">
  <li   className="nav-item tabsofsuphome   " role="presentation">
    <button   className="nav-link tabsofsuphome active  " id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Worker Attendance</button>
  </li>
  <li   className="nav-item tabsofsuphome   " role="presentation">
    <button   className="nav-link tabsofsuphome " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Vendor Attendance</button>
  </li>
</ul>
<div   className="tab-content " id="myTabContent">
  <div   className="tab-pane fade show active mt-7" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
<Labour/>
  </div>
  <div   className="tab-pane fade mt-7" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">hii.</div>
</div>
</div>
</div>
</div>
    </>
  )
}
