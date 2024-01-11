import React from 'react'

export default function ButtonContainer() {
  return (
    <div className="d-flex justify-content-center">
        <button className="btn btn-danger mx-5 px-4 py-4 border-3 border-white ">Book Room</button>
        <button className="btn btn-danger mx-5 px-4 py-4 border-3 border-white  ">Update Booked Room</button>
        <button className="btn btn-danger mx-5 px-4 py-4 border-3 border-white  ">Recommend Others</button>
    </div>
  )
}
