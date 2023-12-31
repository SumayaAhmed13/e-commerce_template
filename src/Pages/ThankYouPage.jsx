import React from 'react'
import { NavLink } from "react-router-dom";
 const ThankYouPage = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="col-md-4">
                <div className="border border-3 border-success"></div>
                <div className="card  bg-white shadow p-5">
                    <div className="mb-4 text-center">
                    <i class="bi-check-circle text-success"></i>
                    </div>
                    <div className="text-center">
                        <h1>Thank You !</h1>
                        <p>We've send the link to your inbox. Lorem ipsum dolor sit,lorem lorem </p>
                        <NavLink to="/" className="btn btn-outline-success"> Back Home</NavLink>
                       
                    </div>
                </div>
            </div>
        </div>
  )
}
export default ThankYouPage
