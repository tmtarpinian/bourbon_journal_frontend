import React from 'react'

const Category = (props) => {
  
    return (
      <div className="card">
        <div className="content">
          
          <div className="category">
            <p>Name: {props.category.name}</p>
          </div>
        </div>
        <div className="delete-button">
          <button onClick={props.deleteButton} id={props.category.id}>Delete This Category (and all Bourbons with it!)</button>
        </div>
      </div>
    )
}

export default Category