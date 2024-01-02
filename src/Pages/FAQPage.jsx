import React from 'react'

 const FAQPage = () => {
  return (
    <div className="container mt-3">
    <h4>Frequently Asked Questions</h4>
    <div className="col-12 text-center ">
    <form className="form-inline d-flex">
     <div className="form-group w-50">
      <input type="text" className="form-control" placeholder="Ask a Question"/>
     </div>
      <div className="mx-2">
       <button type="submit" className="btn btn-success ">Send</button>
      </div>
     
   </form>
   </div>
   <div className="list-group w-100 mt-3">
     <a  className="list-group-item list-group-item-action">
       <div className="d-flex w-100 justify-content-between">
         <h5 className="mb-1">Question 1</h5>
       </div>
       <p className="mb-1">
         Short & concise version of the answer?
       </p>
       <small>Answer</small>
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, a aspernatur debitis sed eligendi dicta!
       </p>
       <div className="collapse mt-3">
         Detailed and comprehensive answer goes here. pariatur cliche reprehenderit, enim eiusmod
         high
         life accusamus terry richardson ad
         squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
         sapiente ea proident.
       </div>
     </a>
     <a className="list-group-item list-group-item-action">
       <div className="d-flex w-100 justify-content-between">
         <h5 className="mb-1">Question 2</h5>
       </div>
       <p className="mb-1">
         Short & concise version of the answer?
       </p>
       <small>Answer</small>
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, a aspernatur debitis sed eligendi dicta!
       </p>
       <div className="collapse mt-3">
         Detailed and comprehensive answer goes here. pariatur cliche reprehenderit, enim eiusmod
         high
         life accusamus terry richardson ad
         squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
         sapiente ea proident.
       </div>
     </a>
     <a className="list-group-item list-group-item-action">
       <div className="d-flex w-100 justify-content-between">
         <h5 className="mb-1">Question 3</h5>
       </div>
       <p className="mb-1">
         Short & concise version of the answer?
       </p>
       <small>Answer</small>
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, a aspernatur debitis sed eligendi dicta!
       </p>
       <div className="collapse mt-3">
         Detailed and comprehensive answer goes here. pariatur cliche reprehenderit, enim eiusmod
         high
         life accusamus terry richardson ad
         squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
         sapiente ea proident.
       </div>
     </a>
   </div>
 </div>

  )
}
export default FAQPage
