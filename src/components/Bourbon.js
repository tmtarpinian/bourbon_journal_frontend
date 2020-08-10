import React from 'react'

const Bourbon = () => {
  
  
    return (
      <div className="card">
        <div className="content">
          
          <div className="bourbon">
            <p>Name: </p>
            <p>Proof: </p>
          </div>
        </div>
        <div className="delete-button">
          <button>Delete This Bourbon</button>
        </div>
      </div>
    )
}

export default Bourbon


//<button onClick={this.props.DeleteBourbon}  id={this.props.pet.id}>Delete This Bourbon</button>

//{this.props.pet.age}