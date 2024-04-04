import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'




function Header({insideDashboard}) {
  const navigate = useNavigate()
  const handleLogout = () => {
    //remove all details from session storage
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("existinnguser");
    //navigate to landing page
    navigate('/')
  }
  return (
    <div>
        <Navbar className="bg-body-tertiary position-fixed top-0 w-100">
        <Container>
          <Navbar.Brand>
          <Link to={'/'} style={{textDecoration:"none",color:'black',fontSize:'30px'}}><i class="fa-solid fa-list-check fa-xs me-2 "></i> Project Fair</Link>
           
          </Navbar.Brand>
          {
            insideDashboard && 
            <button onClick={handleLogout} className='btn btn-outline align-items-right border'>Logout</button>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header