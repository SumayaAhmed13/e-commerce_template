import React from 'react'
import { NavLink } from "react-router-dom";
const SignInPage = () => {
  return (
   <>
    <div className="mask d-flex align-items-center gradient-custom-3">
    <div className="container  mt-2">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius:"15px"}}>
            <div className="card-body p-2">
              <h2 className="text-uppercase text-center mb-3 mt-2">Create an account</h2>
              <form className='p-5'>

                <div className="form-outline mb-2">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                  <label className="form-label">Your Name</label>
                </div>

                <div className="form-outline mb-2">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                  <label className="form-label">Your Email</label>
                </div>

                <div className="form-outline mb-2">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                  <label className="form-label">Password</label>
                </div>

                <div className="form-outline mb-2">
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                  <label className="form-label">Repeat your password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label">
                    I agree all statements in 
                    <NavLink to="/conditionPage" className="fw-bold text-danger"> Terms of service</NavLink>
                    
                  </label>
                </div>

                
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button className="btn btn-success gradient-custom-4 text-body fw-bold fs-6" type="button">Register</button>
                  
                </div>

                <p className="text-center text-muted mt-3 mb-0">Have already an account? 
                    <NavLink to="/loginPage" className="fw-bold text-success">Login here</NavLink>
                </p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
export default SignInPage


