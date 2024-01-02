import React from 'react'
import { NavLink } from "react-router-dom";
import Layout from '../components/Layout';
 const ProductPage = () => {
  return (
    <Layout>
    <div className="container">
    <section className='bg-light'>
        <div className="container py-5">
          <div className="row">
            <h3 className="me-5">New Arrivals</h3>
            <div className="col-md-12 col-lg-4 mb-5 mb-lg-0">
              <div className="card">
                <div className="d-flex p-3 justify-content-end">
                  <div
                    className="bg-success rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style="width: 35px; height: 35px;">
                    <p className="text-white mb-0 small">new</p>
                  </div>
                </div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                  className="card-img-top" alt="Laptop" />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small"><a href="#" className="text-muted">Laptops</a></p>
                    <p className="small text-danger"><s>$1099</s></p>
                  </div>
      
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">HP Notebook</h5>
                    <h5 className="text-dark mb-0">$999</h5>
                  </div>
      
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">Available: <span className="fw-bold">6</span></p>
                    <div className="ms-auto text-warning">
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2" >
                  <NavLink to="/cartPage" className="btn btn-success shadow-3 rounded-pill"> Buy now</NavLink>
                  <NavLink to="/wishPage" className="btn btn-outline-danger shadow-3 rounded-pill mx-3"> Wishlist</NavLink>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="card">
                <div className="d-flex justify-content-end p-3">
                  
                  <div
                    className="bg-success rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style="width: 35px; height: 35px;">
                    <p className="text-white mb-0 small">new</p>
                  </div>
                </div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
                  className="card-img-top" alt="Laptop" />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small"><a href="#!" className="text-muted">Laptops</a></p>
                    <p className="small text-danger"><s>$1199</s></p>
                  </div>
      
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">HP Envy</h5>
                    <h5 className="text-dark mb-0">$1099</h5>
                  </div>
      
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">Available: <span className="fw-bold">7</span></p>
                    <div className="ms-auto text-warning">
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2" >
                  <NavLink to="/cartPage" className="btn btn-success shadow-3 rounded-pill"> Buy now</NavLink>
                  <NavLink to="/wishPage" className="btn btn-outline-danger shadow-3 rounded-pill mx-3"> Wishlist</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="card">
                <div className="d-flex justify-content-end p-3">
                  
                  <div
                    className="bg-success rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style="width: 35px; height: 35px;">
                    <p className="text-white mb-0 small">new</p>
                  </div>
                </div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp"
                  className="card-img-top" alt="Gaming Laptop" />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small"><a href="#!" className="text-muted">Laptops</a></p>
                    <p className="small text-danger"><s>$1399</s></p>
                  </div>
      
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Toshiba B77</h5>
                    <h5 className="text-dark mb-0">$1299</h5>
                  </div>
      
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">Available: <span className="fw-bold">5</span></p>
                    <div className="ms-auto text-warning">
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2" >
                  <NavLink to="/cartPage" className="btn btn-success shadow-3 rounded-pill"> Buy now</NavLink>
                  <NavLink to="/wishPage" className="btn btn-outline-danger shadow-3 rounded-pill mx-3"> Wishlist</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    
  

    <section className='bg-light'>
        <div className="container py-5">
          <div className="row">
            <h3 className="me-5">Featured Products</h3>
            <div className="col-md-12 col-lg-4 mb-5 mb-lg-0">
               
              <div className="card">
                <div className="d-flex justify-content-between p-3">
                    <p className="lead mb-0">Today's Combo Offer</p>
                    <div
                      className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                      style="width: 35px; height: 35px;">
                      <p className="text-white mb-0 small">x2</p>
                    </div>
                  </div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                  className="card-img-top" alt="Laptop" />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small"><a href="#!" className="text-muted">Laptops</a></p>
                    <p className="small text-danger"><s>$1099</s></p>
                  </div>
      
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">HP Notebook</h5>
                    <h5 className="text-dark mb-0">$999</h5>
                  </div>
      
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">Available: <span className="fw-bold">6</span></p>
                    <div className="ms-auto text-warning">
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2" >
                  <NavLink to="/cartPage" className="btn btn-success shadow-3 rounded-pill"> Buy now</NavLink>
                  <NavLink to="/wishPage" className="btn btn-outline-danger shadow-3 rounded-pill mx-3"> Wishlist</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="card">
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style="width: 35px; height: 35px;">
                    <p className="text-white mb-0 small">x2</p>
                  </div>
                </div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
                  className="card-img-top" alt="Laptop" />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small"><a href="#!" className="text-muted">Laptops</a></p>
                    <p className="small text-danger"><s>$1199</s></p>
                  </div>
      
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">HP Envy</h5>
                    <h5 className="text-dark mb-0">$1099</h5>
                  </div>
      
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">Available: <span className="fw-bold">7</span></p>
                    <div className="ms-auto text-warning">
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2" >
                  <NavLink to="/cartPage" className="btn btn-success shadow-3 rounded-pill"> Buy now</NavLink>
                  <NavLink to="/wishPage" className="btn btn-outline-danger shadow-3 rounded-pill mx-3"> Wishlist</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="card">
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style="width: 35px; height: 35px;">
                    <p className="text-white mb-0 small">x2</p>
                  </div>
                </div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp"
                  className="card-img-top" alt="Gaming Laptop" />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small"><a href="#!" className="text-muted">Laptops</a></p>
                    <p className="small text-danger"><s>$1399</s></p>
                  </div>
      
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Toshiba B77</h5>
                    <h5 className="text-dark mb-0">$1299</h5>
                  </div>
      
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">Available: <span className="fw-bold">5</span></p>
                    <div className="ms-auto text-warning">
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2" >
                  <NavLink to="/cartPage" className="btn btn-success shadow-3 rounded-pill"> Buy now</NavLink>
                  <NavLink to="/wishPage" className="btn btn-outline-danger shadow-3 rounded-pill mx-3"> Wishlist</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>   
    </div>
   </Layout>
  )
}
export default ProductPage
