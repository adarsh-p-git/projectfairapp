import React, { createContext, useState } from 'react'
const addProjectResponseContext=createContext()


function ContextShare({children}) {
    const [addProjectResponse,setProjectResponse]=useState({})
  return (
    <>
    <addProjectResponse.Provider value={{addProjectResponse,setProjectResponse}}>
        {children}
    </addProjectResponse.Provider>
    </>
  )
}

export default ContextShare