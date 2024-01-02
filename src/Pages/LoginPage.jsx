import React from 'react'
 import { NavLink } from "react-router-dom";
 const LoginPage = () => {
  return (
    <div className="d-flex align-items-center gradient-custom-3 ">
    <div className="container mt-2 mb-3">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius:"15px"}}>
            <div className="card-body p-2">
              <h2 className="text-uppercase text-center mb-3 mt-2">Login</h2>
              <form className='p-5'>
               <div className="form-outline mb-2">
                  <label className="form-label">Your Email</label>
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
               </div>

                <div className="form-outline mb-2">
                <label className="form-label">Password</label>
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                 </div>
               
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <NavLink to="/checkOutPage" className="btn btn-success gradient-custom-4 text-body fw-bold fs-6"> Login</NavLink>
                  </div>
                  <p className="text-center text-muted mt-3 mb-0">Do not Have Account! 
                    <NavLink to="/signInPage" className="fw-bold text-success">Register</NavLink>
                  </p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoginPage
