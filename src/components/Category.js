import React from 'react'

const Category = (props) => {
  
    return (
      <div id="bourbon-category">
        Name: {props.category.name}
      </div>
    )
}

export default Category