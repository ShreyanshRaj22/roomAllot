import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
            <div class="container-fluid mx-5">
                <a class="navbar-brand fw-bold text-dark" href="#">NITD "Hostel-Allot"</a>
                <form class="d-flex">
                  <button class="btn btn-outline-light fw-bold text-white" type="submit">Sign In</button>
                </form>
            </div>
        </nav>
    </div>
  )
}
