import React, { useContext, useEffect, useState } from 'react'
import AddProjects from './AddProjects'
import { userProjectAPI } from '../services/allAPI'
import {addProjectResponseContext} from './context/ContextShare'
import { Alert } from 'react-bootstrap'



function MyProjects() {
  const [userProjects,setUserProjects]=useState([])
  const {addProjectResponse,setAddProjectResponse}=useContext(addProjectResponseContext)
  const getUserProjects=async()=>

  {
   if(sessionStorage.getItem("token"))
   {
    const token=sessionStorage.getItem("token")
    const reqHeader={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result =await userProjectAPI(reqHeader)
    if(result.status===200)
    {
      setUserProjects(result.data)
    }
    else
    {
      console.log(result);
      console.log(result.response.data)
      //alert('result.response.data')
    }
   }
  }
  useEffect(()=>{
    getUserProjects()
  },[addProjectResponse])
  return (
    <div className='card shadow p-3 mt-3'>
      <div className="d-flex">
        <h2>My Projects</h2>
        <div className="ms-auto">
          <AddProjects/>
        </div>
      </div>
      {
      addProjectResponse.title?<Alert className='bg-success' dismissible><span className='text-danger fw-bolder'> 
      {addProjectResponse.title} Project added successfully</span></Alert>:null
     }
    <div className="mt-4">
      {/* collection of projects */}
      {userProjects?.length>0?userProjects.map(project=>
      (
        <div className="border d-flex align-items-center rounded p-2">
        <h5>{project.title}</h5>
        <div className="icon ms-auto">
          <button className="btn"><i class="fa-solid fa-pen-to-square"></i></button>
          <a href={`${project.github}`}></a> <i class="fa-brands fa-github"></i>
          <button className="btn"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
      )):
      
      <p className="text-danger fw-bolder fs-5">No projects to Upload Yet !!!</p>
      }</div>
      
    </div>
  )
}

export default MyProjects