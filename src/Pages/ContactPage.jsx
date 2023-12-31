import React from "react";
import Layout from "../components/Layout";
const ContactPage = () => {
  return (
    <Layout>
    <div className="mask d-flex align-items-center gradient-custom-3">
    <div className="container  mt-2 mb-2">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius:"15px"}}>
            <div className="card-body p-2">
              <h2 className="text-uppercase text-center mb-3 mt-2">Contact Us</h2>
              <form className='p-5'>

                <div className="form-outline mb-2">
                  <label className="form-label">Your Name</label>
                  <input type="text"  className="form-control form-control-lg" />
               </div>
                <div className="form-outline mb-2">
                  <label className="form-label">Phone</label>
                  <input type="text"  className="form-control form-control-lg" />
      
                </div>
                <div className="form-outline mb-2">
                 <label className="form-label">Your Email</label>
                  <input type="email"  className="form-control form-control-lg" />
                </div>
               <div className="form-outline mb-2">
                <label className="form-label">Message</label>
                <textarea className="form-control" type="text" placeholder="Message"style={{height:"10rem"}}></textarea>
               </div>
               <div className="d-grid gap-2 col-6 mx-auto">
                  <button className="btn btn-success gradient-custom-4 text-body fw-bold fs-6" type="button">Submit</button>
                  
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </Layout>
  );
};
export default ContactPage;
