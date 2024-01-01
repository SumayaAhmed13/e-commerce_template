import React from 'react'
import { NavLink } from "react-router-dom";
 const ProductDetailPage = () => {
  return (
    <div className="container py-5">
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
            <div className=" d-flex gap-3 mb-4">
               <input type="number" className=" form-control" value="1" style={{maxWidth:"80px"}}/>
               
            </div>
            <div>
                <NavLink to="/cartPage" className="btn btn-primary">Add to cart</NavLink>
                <NavLink to="/wishPage" className="btn btn-outline-secondary mx-3">Add to Wishlist</NavLink>
          
             
            </div>
       </div>
    </div>

    <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Description</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Specification</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Reviews</button>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam veniam suscipit repellendus impedit? Consequatur cum nobis, enim iste culpa officiis obcaecati quaerat, ratione, est sapiente eaque deserunt eos perferendis sequi officia possimus quos harum id nemo. Rem perspiciatis repellat velit quasi neque repudiandae asperiores sequi dolorum, fugiat, illum odio.
          </p>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam veniam suscipit repellendus impedit? Consequatur cum nobis, enim iste culpa officiis obcaecati quaerat, ratione, est sapiente eaque deserunt eos perferendis sequi officia possimus quos harum id nemo. Rem perspiciatis repellat velit quasi neque repudiandae asperiores sequi dolorum, fugiat, illum odio.
          </p>
      </div>
      <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam veniam suscipit repellendus impedit? Consequatur cum nobis, enim iste culpa officiis obcaecati quaerat, ratione, est sapiente eaque deserunt eos perferendis sequi officia possimus quos harum id nemo. Rem perspiciatis repellat velit quasi neque repudiandae asperiores sequi dolorum, fugiat, illum odio.
          </p>
      </div>
    </div>
 </div>
  )
}
export default ProductDetailPage;
