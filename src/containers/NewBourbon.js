import React, { Component } from 'react';
import { connect } from 'react-redux'
import {newBourbon} from '../actions/BourbonsActions'   

class NewBourbon extends Component {
    state = {
        category_id: null,
        name: "",
        distillery: "",
        proof: null,
        aged: null,
        flavornotes: "",
        pairing: ""
    }

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleCategoryChange = (event) => {
    this.setState({
      category_id: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    

    this.props.newBourbon(this.state)     
    this.setState({               
      name: "",
      distillery: "",
      proof: null,
      aged: null,
      flavornotes: "",
      pairing: ""
    })
    this.props.history.push('/bourbons')
    
  }

  render() {
    return(
      <div id="new-bourbon">
        <h2> Add Your Boubon Here</h2>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <label>
              Pick A Category:
              <br/>
              <br/>
              <select className="form-control" value={this.state.value} onChange={this.handleCategoryChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
          </p>
          <p>
            <label> Name: <br/>
              <input className="form-control"
                type="text"
                id="name"
                onChange={this.handleInputChange}
                placeholder="name"
              />
            </label>
          </p>
          <p>
            <label> Distillery: <br/>
              <input className="form-control"
                type="text"
                id="distillery"
                onChange={this.handleInputChange}
                placeholder="Distillery"
              />
            </label>
          </p>
          <p>
            <label> Proof: <br/>
              <input className="form-control"
                type="text"
                id="proof"
                onChange={this.handleInputChange}
                placeholder="How Strong is this?"
              />
            </label>
          </p>
          <p>
            <label> Aged: <br/>
              <input className="form-control"
                type="text"
                id="aged"
                onChange={this.handleInputChange}
                placeholder="How Old?"
              />
            </label>
          </p>
          <p>
            <label> Flavornotes: <br/>
              <input className="form-control"
                type="textarea"
                id="flavornotes"
                onChange={this.handleInputChange}
                placeholder="write the flavors you taste here"
              />
            </label>
          </p>
          <p>
            <label> Food Pairing: <br/>
              <input className="form-control"
                type="text"
                id="pairing"
                onChange={this.handleInputChange}
                placeholder="pair it with any food?"
              />
            </label>
          </p>
          <input type="submit" class="btn btn-block btn-lg btn-primary"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {newBourbon})(NewBourbon);