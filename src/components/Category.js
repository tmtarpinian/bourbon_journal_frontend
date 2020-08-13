import React from 'react'
import { Link } from 'react-router-dom';

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
                <Link key={props.category.id} to={`/categories/${props.category.id}`} exact class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">{props.category.name}</Link>
                {/* <img class="img-fluid" src="assets/img/portfolio/cabin.png" alt=""> */}
            </div>
        </div>
      </div>
    )
}

export default Category