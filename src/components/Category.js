import React from 'react'
import { Link } from 'react-router-dom';

const Category = (props) => {

    return (
        <div className="bourbon-category">
            <div className="bourbon-category-content">
                <h3> 
                    <Link key={props.category.id} to={`/categories/${props.category.id}`} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">{props.category.name}</Link>
                </h3>
            </div>
        </div>
    )
}

export default Category
