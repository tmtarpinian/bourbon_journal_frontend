import React from 'react'

const Bourbon = (props) => {
  
    return (
      <div id="bourbon-category">
      {/* <!-- Portfolio Item 1--> */}
      <div class="col-md-6 col-lg-4 mb-5">
          <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                  {/* <!-- <i class="fas fa-plus fa-3x"></i> --> */}
                  </div>
              </div>
              <p>Name: {props.bourbon.name}</p>
            <p>Proof: {props.bourbon.proof}</p>
            <div className="delete-button">
              <button onClick={props.deleteButton} id={props.bourbon.id}>Delete This Bourbon</button>
            </div>
              {/* <img class="img-fluid" src="assets/img/portfolio/cabin.png" alt=""> */}
          </div>
      </div>
    </div>
    )
}

export default Bourbon