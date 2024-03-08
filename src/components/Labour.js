import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Suphome.css'

export default function Labour() {



    const [data, setData]=useState([])
    
    const[postd,setPostd]=useState({
      name:"",
      profile:"", 
      profileImage:null, 
      attendance:"", 
    })
const [selectedButton, setSelectedButton] = useState('');



const handleProfileChange = (field, value) => {
 setPostd((prevProfile) => ({
    ...prevProfile,
    [field]: value,
  }));
};

const handleImageChange = (event) => {
  const file = event.target.files[0];
 setPostd((prevProfile) => ({
    ...prevProfile,
    profileImage: file,
  }));
};


  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

    useEffect(() => {
        result();
      }, []);
    
 const result = async ()=>{
  // try {
      const res = await axios.get("http://localhost:3001/api/Attendenceroute/getdata");

      // const { name, profile, attendance,profileImage } = response.data;
      // setData(name,profile,attendance,profileImage)

  // }catch (error) {
  //   console.error(error);
  // }
  setData(res.data)
  console.log(res.data);
     } 
     
     const formData = new FormData();
     formData.append('name', postd.name);
     formData.append('profile', postd.profile);
     formData.append('profileImage', postd.profileImage);
     formData.append('attendance', selectedButton);

     const submitdata=(e)=>{
      e.preventDefault()

      try {

             axios.post("http://localhost:3001/api/Attendenceroute/createdata",formData,{
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
             )
             console.log('Data sent successfully:', formData);
            

          }
            
            catch(error) {
              console.error('Errorsending data:', error);
            //   (resp) => {
            //     console.log('res',resp.data)
                // result()
            //  }
          
            
    }
    result()
  }
  return (
    <>
    <div className="container mr-0 pr-0 pl-0  des 	">  
    {data.length===0 && 
    <div>
    <form onSubmit={submitdata}>
      <div className="row justify-content-center ">
        <div  className=" card col-11 col-lg-5" >
  <div  className="card-body ">
  <div>
  <label htmlFor="name"  className="block mb-2 text-sm font-bold  text-gray-900 dark:text-black">Worker Name</label>
   <input type="text" name="name" id="name" value={postd.name} onChange={(e) => handleProfileChange('name', e.target.value)}   />
  </div>
  <div>
  <label htmlFor="profile"  className="block mb-2 text-sm font-bold  text-gray-900 dark:text-black">Worker Profile</label>
   <input type="text" name="profile" id="profile" value={postd.profile}  onChange={(e) => handleProfileChange('profile', e.target.value)}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 f block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required/>
  </div >
  <div className="mt-2">
   <input type="file" accept="image/*"   onChange={handleImageChange}  placeholder='Add Photo'/>
  </div>
    <div className=' flex justify-between my-3'>
    <div className='	 rounded-2xl py-1 text-sm '>
    <button
        type="button"
        onClick={() => handleButtonClick('Present')}
        className={selectedButton === 'Present' ? 'selected' : ''}
      >
        Present
      </button>
    </div>
    <div className='  rounded-2xl py-1 text-sm	'>
    <button
        type="button"
        onClick={() => handleButtonClick('Hald day')}
        className={selectedButton === 'Hald day' ? 'selected' : ''}
      >
        Hald day
      </button>
    </div>
    <div className='  rounded-2xl py-1 text-sm	' >
    <button
        type="button"
        onClick={() => handleButtonClick('Absent')}
        className={selectedButton === 'Absent' ? 'selected' : ''}
      >
        Absent
      </button>
    </div>
    </div>
  <div className='my-2'>
  <button type="submit" className="w-full text-gray-800   focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-medium px-5 py-2 text-center border-2 bg-orange-500 rounded-3xl"> <i className="bi bi-plus"></i>Add Labour </button>
  </div>
  </div>
 </div>
 </div>
</form>
</div>
}
{data.length > 0 &&
<div className='	'>
 <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close text-red-600" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg"></i></button>
      </div>
      <div className="modal-body">
      <form onSubmit={submitdata} >
      <div>
  <label htmlFor="name"  className="block mb-2 text-sm font-bold  text-gray-900 dark:text-black">Worker Name</label>
   <input type="text" name="name" id="name" onChange={(e) => setPostd({...postd, [e.target.name]: e.target.value })}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 f block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required/>
  </div>
  <div>
  <label htmlFor="profile"  className="block mb-2 text-sm font-bold  text-gray-900 dark:text-black">Worker Profile</label>
   <input type="text" name="profile" id="profile" onChange={(e) => setPostd({...postd, [e.target.name]: e.target.value })}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 f block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required/>
  </div>
  <div className=' flex justify-between my-3'>
    <div className='	 rounded-2xl py-1 text-sm '>
    <input type="radio "  className="btn-check" name="attendance" value='Present' id="attendance" autocomplete="off"  onChange={(e) => setPostd({...postd, [e.target.name]: "Present"})}/>
    <label className="btn ab" htmlFor="attendance">Present</label>
    </div>
    <div className='  rounded-2xl py-1 text-sm	'>
    <input type="radio"  className="btn-check" name="attendance" value='Half day' id="attendance" autocomplete="off" onChange={(e) => setPostd({...postd, [e.target.name]: "Half day"})}/>
    <label className="btn bc" htmlFor="attendance">Halfday</label>
    </div>
    <div className='  rounded-2xl py-1 text-sm	' >
    <input type="radio"  className="btn-check" name="attendance" value='Absent' id="attendance" autocomplete="off" onChange={(e) => setPostd({...postd, [e.target.name]: "Absent"})}/>
    <label className="btn cd" htmlFor="attendance">Absent</label>
    </div>
    </div>
  <button type="submit" className="w-full text-gray-800   focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-medium px-4 py-2 text-center border-2 rounded-3xl" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i className="bi bi-plus"></i>Add Labour </button>
</form>
      </div>     
    </div>
  </div>
</div> 
<div className=" row ml-0 mr-0 mb-2  cardtabdesign">
      {data.map((i)=>{
        return(
        <div className=' mt-1 flex maindivoflabour'>  
          <div className="card  col-12 col-lg-12 col-md-12 col-sm-12  rounded-3xl h-fit mx-2 mt-1"  key={i.id}>
          <div className="card-body px-0">
            <div className='flex justify-content-between mx-3'>
            <div>
            <h5 className="card-title font-bold text-small">{i.name}</h5>
            <h5 className="card-title text-xs">{i.profile}</h5>
            </div>
           
             {/* <input  /> */}
            {/* <img src={file} type="file" onChange={handleChange1} style={{ maxWidth: '100px', maxHeight: '100px' , backgroundColor:'red', borderRadius:'50%'}} /> */}
        <div className='imges ml-5'>
        <img 
              src={`http://localhost:3001/upload/${i.profileImage.id}`}
              alt=""             
              style={{ maxWidth: '100px', maxHeight: '100px' , backgroundColor:'gray', borderRadius:'50%'}}
              onError={(e) => console.error('Error loading image:', e)}

            /> 


          </div>    
          <button type="button" className="" data-bs-toggle="modal" data-bs-target="#new">
            <i className="bi bi-three-dots-vertical"></i></button>
       
            

{/* modallll */}
  <div className=" modal fade" id="new" tabindex="-1" aria-labelledby="newLabel" aria-hidden="true">
  <div className="modal-dialog managewidth">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <span>
    <i class="bi bi-pencil-square"></i>
   <input type="text" name="profile" id="profile" placeholder='Edit Name'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg f block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required/>
  </span>
  <div>
  <i class="bi bi-clock-fill"></i>
   <input type="text" name="profile" id="profile" placeholder='Add Overtime'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg f block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required/>
  </div>
  <div>
  <i class="bi bi-calendar"></i>
   <input type="text" name="profile" id="profile" placeholder='Add Leave'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg f block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required/>
  </div>
  <div>
  <i class="bi bi-trash"></i>
   <input type="text" name="profile" id="profile" placeholder='Delete Worker'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg f block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required/>
  </div>

      </div>
      <div className="modal-footer">
      <button type="submit" className="w-full text-gray-800   focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-medium px-4 py-2 text-center border-2 rounded-3xl bg-orange-500" data-bs-toggle="modal" data-bs-target="#new">Ok</button>

      </div>
    </div>
  </div>
</div>
            
            </div>          
            <div className=' flex mt-3 '>
    <button className='col-3 mx-2.5   py-1 px-1 text-xs font-bold  ab rounded-3xl bg-gray-300'>Present
    {/* <input type="radio "  className="btn-check" name="attendance" value='Present' id="attendance"   onChange={(e) => setPostd({...postd, [e.target.name]: "Present"})}/>
    <label className="btn 	 ab" htmlFor="attendance">Present</label> */}
    </button>
    <button className='col-3 mx-2.5   py-1 px-1 text-xs font-bold bc	rounded-3xl bg-gray-300'>Half day
    {/* <input type="radio"  className="btn-check" name="attendance" value='Half day' id="attendance"  onChange={(e) => setPostd({...postd, [e.target.name]: "Half day"})}/>
    <label className="btn bc" htmlFor="attendance">Halfday</label> */}
    </button>
    <button className=' col-3 mx-2.5  py-1 px-1 text-xs font-bold	cd rounded-3xl bg-gray-300' >Absent
    {/* <input type="radio"  className="btn-check" name="attendance" value='Absent' id="attendance"  onChange={(e) => setPostd({...postd, [e.target.name]: "Absent"})}/>
    <label className="btn cd" htmlFor="attendance">Absent</label> */}
    </button>
    </div>
  </div>
 </div>
      
      </div>  

 )})} 
 </div> 

   <div className="col-12 flex justify-around bottom-14 absolute itemnotvisible py-3">
        <button className='bg-orange-500 px-4  font-bold text-xs py-1 rounded-3xl'>Attendence Report</button> 
        <button type="submit" className=" text-gray-800   focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-xs px-4 py-1 text-center border-2 rounded-3xl" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i className="bi bi-plus"></i>Add Labour </button>
        </div>  
</div>
}
</div>
    </>
  )
}
