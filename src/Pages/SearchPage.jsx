import React from 'react'


 const SearchPage = () => {
  return (
    <div className='cart-wrap'>
 	    <div className="container">
	        <div className="row">
			    <div className="col-md-12">
			        <div className="main-heading mb-10">Search Result</div>
			        <div className="table-wishlist">
				        <table cellPadding="0" cellSpacing="0" border="0" width="100%">
				        	<thead>
					        	<tr>
					        		<th width="45%">Product Name</th>
					        		<th width="15%">Unit Price</th>
					        		<th width="15%">Stock Status</th>
					        		<th width="15%"></th>
					        		<th width="10%"></th>
					        	</tr>
					        </thead>
					        <tbody>
					        	<tr>
					        		<td width="45%">
					        			<div className="display-flex align-center">
		                                    <div className="img-product ">
		                                        <img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="" />
		                                    </div>
		                                    <div className="name-product">
		                                        Apple iPad Mini
		                                    </div>
	                                    </div>
	                                </td>
					        		<td width="15%" className="price">$110.00</td>
					        		<td width="15%"><span className="in-stock-box">In Stock</span></td>
					        		<td width="15%"><button className="round-black-btn small-btn">Add to Cart</button></td>
					        		<td width="10%" className="text-center"><a href="#" className="trash-icon"><i className="bi bi-trash"></i></a></td>
					        	</tr>
					        	<tr>
					        		<td width="45%">
					        			<div className="display-flex align-center">
		                                    <div className="img-product">
		                                        <img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="" />
		                                    </div>
		                                    <div className="name-product">
		                                        Apple iPad Mini
		                                    </div>
	                                    </div>
	                                </td>
					        		<td width="15%" className="price">$110.00</td>
					        		<td width="15%"><span className="in-stock-box">In Stock</span></td>
					        		<td width="15%"><button className="round-black-btn small-btn">Add to Cart</button></td>
					        		<td width="10%" className="text-center"><a href="#" className="trash-icon"><i className="bi bi-trash"></i></a></td>
					        	</tr>
					        	<tr>
					        		<td width="45%">
					        			<div className="display-flex align-center">
		                                    <div className="img-product">
		                                        <img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="" />
		                                    </div>
		                                    <div className="name-product">
		                                        Apple iPad Mini
		                                    </div>
	                                    </div>
	                                </td>
					        		<td width="15%" className="price">$110.00</td>
					        		<td width="15%"><span className="in-stock-box">In Stock</span></td>
					        		<td width="15%"><button className="round-black-btn small-btn">Add to Cart</button></td>
					        		<td width="10%" className="text-center"><a href="#" className="trash-icon"><i className="bi bi-trash"></i></a></td>
					        	</tr>
				        	</tbody>
				        </table>
				    </div>
			    </div>
			</div>
		</div>
    </div>
 



  )
}
export default SearchPage
