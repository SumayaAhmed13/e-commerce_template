import React from 'react'
import { NavLink } from "react-router-dom";
 const Footer = () => {
  return (
   <>
    <div className="container my-5">
    <footer className="text-center text-lg-start text-white rounded" style={{backgroundColor: "#45526e"}}>
     <div className="container p-4 pb-0">
        <section>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Company name
              </h6>
              <p>
                Template.com ,Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
           <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
               <NavLink to="/" className="text-white">New Arrivals</NavLink>
              </p>
              
              
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p><NavLink to="/" className="text-white">Home</NavLink></p>
              <p><NavLink to="/contactPage" className="text-white">Contact</NavLink></p>
              <p><NavLink to="/blogPage" className="text-white">Blog</NavLink></p>
              <p><NavLink to="/thankYouPage" className="text-white">ThankYouPage</NavLink></p>
              <p><NavLink to="/notFoundPage" className="text-white">404</NavLink></p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p><i class="bi bi-house"></i> Dhaka, Bangladesh</p>
              <p><i class="bi bi-envelope"></i> info@gmail.com</p>
              <p><i class="bi bi-phone"></i> + 01 234 567 88</p>
              <p><i class="bi bi-printer"></i> + 01 234 567 89</p>
            </div>
          
          </div>
        
        </section>
        <hr className="my-3"/>
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
             <div className="p-3">© 2024 Copyright : <span className=' fs-6 fw-semibold'>Sumaya Ahmed</span></div>
            </div>
            
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a className="btn btn-outline-success btn-floating m-1 text-white opacity-75"><i className="bi bi-facebook"></i></a>
              <a className="btn btn-outline-success btn-floating m-1 text-white opacity-75"><i className="bi bi-twitter"></i></a>
              <a className="btn btn-floating m-1 text-white btn-outline-success opacity-75"><i className="bi bi-google"></i></a>
              <a className="btn btn-floating m-1 text-white btn-outline-success opacity-75"><i className="bi bi-instagram"></i></a>
            </div>
       
          </div>
        </section>
        
      </div>
  
    </footer>

  </div>
   </>
  )
}
export default Footer
