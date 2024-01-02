import React from 'react'
import { NavLink } from "react-router-dom";
 const ProductDetailPage = () => {
  return (
    <div className=" container py-5">
    <div className="row">
       <div className="col-lg-6">
          <img src="https://placehold.co/600x400" className="img-fluid" alt ='Product Image'/>
       </div>
       <div className="col-lg-6">
           <h2 className="fw-bold">Product Title</h2>
            <p className="text-muted">Product Category</p>
            <h3 className="my-4">$99.99</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, laboriosam.
            </p>
            <hr />

            <div className="row mb-4">
              <div className="col-md-4 col-4 mb-3">
                <label className="mb-2 d-block">Quantity</label>
                <div className="input-group mb-3">
                  <input type="number" min="0" className="form-control text-center border border-secondary" placeholder="1" />
                  
                </div>
              </div>
              <div className="col-md-4 col-4">
                <label className="mb-2">Color</label>
                <select className="form-select border border-secondary" style={{height:"35px"}}>
                  <option>Silver</option>
                  <option>Black</option>
                  
                </select>
              </div>
              <div className="col-md-4 col-4">
                <label className="mb-2">Size</label>
                <select className="form-select border border-secondary" style={{height:"35px"}}>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              <div>
              <NavLink to="/cartPage" className="btn btn-success shadow-3 rounded-pill"> Buy now</NavLink>
            
              <NavLink to="/wishPage" className="btn btn-outline-danger shadow-3 rounded-pill mx-3"> Wishlist</NavLink>
               
              </div>
              
            </div>
           
       </div>
    </div>

    <section className="bg-light border-top py-4">
      <div className="container">
        <div className="row gx-4">
          <div className="col-lg-8 mb-4">
            <div className="border rounded-2 px-3 py-2 bg-white">
         
              <ul className="nav nav-pills nav-justified mb-3">
                <li className="nav-item d-flex">
                  <a className="nav-link d-flex align-items-center justify-content-center w-100 active" >Specification</a>
                </li>
                <li className="nav-item d-flex">
                  <a className="nav-link d-flex align-items-center justify-content-center w-100">Warranty info</a>
                </li>
                <li className="nav-item d-flex">
                  <a className="nav-link d-flex align-items-center justify-content-center w-100">Shipping info</a>
                </li>
                
              </ul>
             
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <p>
                    With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                  <div className="row mb-2">
                    <div className="col-12 col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li><i className="bi bi-check-lg text-success me-2 fs-4"></i>Some great feature name here</li>
                        <li><i className="bi bi-check-lg text-success me-2 fs-4"></i>Lorem ipsum dolor sit amet, consectetur</li>
                        <li><i className="bi bi-check-lg text-success me-2 fs-4"></i>Duis aute irure dolor in reprehenderit</li>
                        <li><i className="bi bi-check-lg text-success me-2 fs-4"></i>Optical heart sensor</li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-6 mb-0">
                      <ul className="list-unstyled">
                        <li><i className="bi bi-check-lg text-success me-2 fs-4"></i>Easy fast and ver good</li>
                        <li><i className="bi bi-check-lg text-success me-2 fs-4"></i>Some great feature name here</li>
                        <li><i className="bi bi-check-lg text-success me-2 fs-4"></i>Modern style and design</li>
                      </ul>
                    </div>
                  </div>
                  <table className="table border mt-3 mb-2">
                    <tr>
                      <th className="py-2">Display:</th>
                      <td className="py-2">13.3-inch LED-backlit display with IPS</td>
                    </tr>
                    <tr>
                      <th className="py-2">Processor capacity:</th>
                      <td className="py-2">2.3GHz dual-core Intel Core i5</td>
                    </tr>
                    <tr>
                      <th className="py-2">Camera quality:</th>
                      <td className="py-2">720p FaceTime HD camera</td>
                    </tr>
                    <tr>
                      <th className="py-2">Memory</th>
                      <td className="py-2">8 GB RAM or 16 GB RAM</td>
                    </tr>
                    <tr>
                      <th className="py-2">Graphics</th>
                      <td className="py-2">Intel Iris Plus Graphics 640</td>
                    </tr>
                  </table>
                </div>
                <div className="tab-pane fade mb-2">
                  Tab content or sample information now <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                </div>
                <div className="tab-pane fade mb-2">
                  Another tab content or sample information now <br />
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div className="tab-pane fade mb-2">
                  Some other tab content or sample information now <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </div>
              </div>
            
            </div>
          </div>
          <div className="col-lg-4">
            <div className="px-0 border rounded-2 shadow-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Similar Products</h5>
                  <div className="d-flex mb-3">
                    <a href="#" className="me-3">
                      <img src="https://placehold.co/600x400/png" style={{minWidth: "96px", height:"96px"}} className="img-md img-thumbnail" />
                    </a>
                    <div>
                      <a href="#" className="nav-link mb-1">
                        Mac<br />
                        MacBook Pro
                      </a>
                      <strong className="text-dark p-3"> $238.90</strong>
                    </div>
                  </div>
    
                  <div className="d-flex mb-3">
                    <a href="#" className="me-3">
                      <img src="https://placehold.co/600x400/png" style={{minWidth: "96px", height:"96px"}} className="img-md img-thumbnail" />
                    </a>
                    <div>
                      <a href="#" className="nav-link mb-1">
                        ASUS<br />
                        ASUS Zenbook 
                      </a>
                      <strong className="text-dark p-3"> $129.50</strong>
                    </div>
                  </div>
    
                
    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 </div>
  


  )
}
export default ProductDetailPage;
