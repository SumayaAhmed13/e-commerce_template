import React from 'react'
import { NavLink } from "react-router-dom";

 const SearchPage = () => {
  return (
	<div className="container mt-5 border">
    <h3>Search Result</h3>
    <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Dell Laptop</td>
            <td>1</td>
            <td>90000</td>
            <td>
                <a className="btn btn-success rounded-pill">Stock In</a>
				<NavLink to="/cartPage" className="btn btn-outline-secondary rounded-pill mx-3"> Add To cart</NavLink>
                <button className="btn btn-outline-danger rounded-pill me-3">Remove</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Apple MacBook Pro</td>
            <td>1</td>
            <td>150000</td>
            <td>
                <a className="btn btn-success rounded-pill">Stock In</a>
				<NavLink to="/cartPage" className="btn btn-outline-secondary rounded-pill mx-3"> Add To cart</NavLink>
				<button className="btn btn-outline-danger rounded-pill me-3">Remove</button>
            </td>
          </tr>
          
        </tbody>
      </table>
  </div>
 



  )
}
export default SearchPage
