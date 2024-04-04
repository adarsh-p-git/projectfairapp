 import React, { Children, useContext, useState } from 'react'


export const tokenAuthorizationContext=useContext()

function TokenAuth() {

    const [isAuthorized,setIsAuthorized]=useState(false)
  return (
    <>
    <tokenAuthorizationContext.Provider value={{isAuthorized,setIsAuthorized}}>
        {Children}
    </tokenAuthorizationContext.Provider>
    </>
  )
}

export default TokenAuth