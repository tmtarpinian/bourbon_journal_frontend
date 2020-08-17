import React from 'react'

const Bourbon = (props) => {
  
    return (
      <div className="bourbon-category">
        {/* <!-- Portfolio Item 1--> */}
          <div className="bourbon-category-content">
                <h3>{props.bourbon.name}</h3>
                <p>Proof: {props.bourbon.proof}</p>
                <p>Age: {props.bourbon.aged}</p>
                <h6>Flavor Notes: </h6>
                <p>{props.bourbon.flavornotes}</p>
                <div className="delete-button">
                  <button onClick={props.deleteButton} id={props.bourbon.id} className="btn btn-block2 btn-lg btn-primary">Delete This Bourbon</button>
                </div>          
          </div>
      </div>
    )
}

export default Bourbon
