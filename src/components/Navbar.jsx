import React from 'react'
import "./navbar.css"
export default function Navbar() {
  return (
    <div>
        <nav className="freenav navbar navbar-expand-lg navbar-light bg-light bg-transparent">
            <div className="container-fluid mx-5">
                <a className="navbar-brand fw-bold text-dark" href="#">NITD "Hostel-Allot"</a>
                <form className="d-flex">
                  <button className="btn btn-outline-light fw-bold text-white" type="submit">Sign In</button>
                </form>
            </div>
        </nav>
    </div>
  )
}
