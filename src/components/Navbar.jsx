import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom" 
export default function Navbar() {
  const home="/";
  const sign="/login"
  return (
    <div>
        <nav className="freenav navbar navbar-expand-lg navbar-light bg-light bg-transparent">
            <div className="container-fluid mx-5">
                <Link className="navbar-brand fw-bold text-white" to={home}>NITD Allots</Link>
                <form className="d-flex">
                  <Link className="btn fw-bold text-white" to={sign}>Sign In</Link>
                </form>
            </div>
        </nav>
    </div>
  )
}
