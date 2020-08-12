import React from 'react'

const Category = (props) => {
  
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
                {props.category.name}
                {/* <img class="img-fluid" src="assets/img/portfolio/cabin.png" alt=""> */}
            </div>
        </div>
      </div>
    )
}

export default Category


  // <div class="ui container">
  //   <div class="ui grid">
  //     <div class="twelve wide column">
  //       <div class="ui cards">
  //         <div class="card">
  //           <div class="content">
  //             <a class="header">Trident♂</a>
  //             <div class="meta"><span class="date">dog</span></div>
  //             <div class="description"><p>Age: 4</p><p>Weight: 1</p></div>
  //           </div>
  //           <div class="extra content">
  //             <button class="ui primary button" id="5c142d9e-ea45-4231-8146-cccf71c704c0">Adopt pet</button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>




{/* <!-- Portfolio Item 2--> */}
                    {/* <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg><!-- <i class="fas fa-plus fa-3x"></i> --></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/cake.png" alt="">
                        </div>
                    </div> */}
                    {/* <!-- Portfolio Item 3--> */}
                    {/* <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg><!-- <i class="fas fa-plus fa-3x"></i> --></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/circus.png" alt="">
                        </div>
                    </div> */}
                    {/* <!-- Portfolio Item 4--> */}
                    {/* <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg><!-- <i class="fas fa-plus fa-3x"></i> --></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/game.png" alt="">
                        </div>
                    </div> */}
                    {/* <!-- Portfolio Item 5--> */}
                    {/* <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg><!-- <i class="fas fa-plus fa-3x"></i> --></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/safe.png" alt="">
                        </div>
                    </div> */}
                    {/* <!-- Portfolio Item 6--> */}
                    {/* <div class="col-md-6 col-lg-4">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg><!-- <i class="fas fa-plus fa-3x"></i> --></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/submarine.png" alt="">
                        </div>
                    </div> */}