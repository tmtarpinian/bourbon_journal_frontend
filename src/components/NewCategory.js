import React from 'react'

 const NewCategory = (props) => {
    return (
        <div>
            <form onSubmit={props.handleOnSubmit}>
          <p>
            <h3>Add a New Category</h3>
            <label> Name: <br/>
              <input className="form-control"
                type="text"
                id="name"
                onChange={props.handleInputChange}
                placeholder="name"
              />
            </label>
          </p>
          <input type="submit" class="btn btn-block btn-lg btn-primary"/>
        </form>
        </div>
    )
}
export default NewCategory

// need an onsumbit in the form tag
