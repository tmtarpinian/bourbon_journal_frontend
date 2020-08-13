import React from 'react'

 const NewCategory = () => {
    return (
        <div>
            <form >
          <p>
            <label> Name: <br/>
              <input className="form-control"
                type="text"
                id="name"
                
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

// add onchange after id
// onChange={this.handleInputChange}