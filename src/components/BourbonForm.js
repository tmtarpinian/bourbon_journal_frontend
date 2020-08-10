import React from 'react'

const BourbonForm = (props) => {
    return (
        <div>
                  <form onSubmit={props.handleOnSubmit}>
        <p>
          <label> Name: <br/>
            <input
              type="text"
              id="name"
              onChange={props.handleInputChange}
              placeholder="name"
            />
          </label>
        </p>
        <p>
          <label> Distillery: <br/>
            <input
              type="text"
              id="distillery"
              onChange={props.handleInputChange}
              placeholder="Distillery"
            />
          </label>
        </p>
        <p>
          <label> Proof: <br/>
            <input
              type="text"
              id="proof"
              onChange={props.handleInputChange}
              placeholder="How Strong is this?"
            />
          </label>
        </p>
        <p>
          <label> Aged: <br/>
            <input
              type="text"
              id="aged"
              onChange={props.handleInputChange}
              placeholder="How Old?"
            />
          </label>
        </p>
        <p>
          <label> Flavornotes: <br/>
            <input
              type="textarea"
              id="flavornotes"
              onChange={props.handleInputChange}
              placeholder="write the flavors you taste here"
            />
          </label>
        </p>
        <p>
          <label> Food Pairing: <br/>
            <input
              type="text"
              id="pairing"
              onChange={props.handleInputChange}
              placeholder="pair it with any food?"
            />
          </label>
        </p>
        <input type="submit" />
      </form>
        </div>
    )
}


export default BourbonForm