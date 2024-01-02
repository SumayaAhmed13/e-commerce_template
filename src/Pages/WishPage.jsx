import React from 'react'

const WishPage = () => {
  return (
    <div className="container py-5">
      <h4>Reviewer</h4>
    <div className="card w-50 text-dark bg-light mb-2">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
        className="rounded-circle shadow-1-strong img-thumbnail mx-4 mt-2 w-25 h-25" />
        <div className="card-body">
            <h5 className="font-weight-bold">Teresa May</h5>
            <p className="my-1">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, repellat
            </p>
           
            <ul className="list-unstyled d-flex justify-content-start">
              <li>
                <i className="bi bi-star text-info me-2"></i>
                
              </li>
              <li>
                <i className="bi bi-star text-info me-2"></i>
              </li>
              <li>
                <i className="bi bi-star text-info me-2"></i>
              </li>
              <li>
                <i className="bi bi-star text-info me-2"></i>
              </li>
              <li>
                <i className="bi bi-star-half text-info me-2"></i>
              </li>
            </ul>
        </div>
    </div>
    <div className="card w-50 text-dark bg-light mb-2">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
        className="rounded-circle shadow-1-strong img-thumbnail mx-4 mt-2 w-25 h-25"/>
        <div className="card-body">
            <h5 className="font-weight-bold">Maggie McLoan</h5>
            <p className="my-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, repellat
            </p>
            <ul className="list-unstyled d-flex justify-content-start">
              <li>
                <i className="bi bi-star text-info me-2"></i>
                
              </li>
              <li>
                <i className="bi bi-star text-info me-2"></i>
              </li>
              <li>
                <i className="bi bi-star text-info me-2"></i>
              </li>
              <li>
                <i className="bi bi-star text-info me-2"></i>
              </li>
              <li>
                <i className="bi bi-star-half text-info me-2"></i>
              </li>
            </ul>
        </div>
    </div>
</div>

  )
}

export default WishPage
