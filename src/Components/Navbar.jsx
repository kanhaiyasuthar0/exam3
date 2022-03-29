import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Contexts/UseAuth'


const Navbar = () => {
    const {isAuth,login, logout } = useContext(AuthContext);
    // const [progress, setProgress] = useState(0)
  return (
    <>
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          <Link className="nav-link" to="/register">Register</Link>
         {!isAuth ? <Link className="nav-link" to="/login">Login</Link> : null}
        {isAuth  ?<Link className="nav-link" to="/products">Products</Link>:null}
         {isAuth ? <Link onClick={logout} className="nav-link" to="/login">Logout</Link>: null}
        </div>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar