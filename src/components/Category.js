import React from 'react'
import { Link } from 'react-router-dom';

const Category = (props) => {

    return (
            <div className="bourbon-category">
                {/* <!-- Portfolio Item 1--> */}
                <div className="bourbon-category-content">
             
                        <Link key={props.category.id} to={`/categories/${props.category.id}`} exact class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">{props.category.name}</Link>
                
                </div>
            </div>
    )
}

export default Category
