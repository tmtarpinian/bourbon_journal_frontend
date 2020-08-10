import React, { Component } from 'react';
import { connect } from 'react-redux'
import {newBourbon} from '../actions/BourbonsActions'

class NewBourbon extends Component {
    state = {
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

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.newBourbon(this.state)     //check this works
    this.setState({
      name: "",
      distillery: "",
      proof: null,
      aged: null,
      flavornotes: "",
      pairing: ""
    })
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <label> Name: <br/>
            <input
              type="text"
              id="name"
              onChange={this.handleInputChange}
              placeholder="name"
            />
          </label>
        </p>
        <p>
          <label> Distillery: <br/>
            <input
              type="text"
              id="distillery"
              onChange={this.handleInputChange}
              placeholder="Distillery"
            />
          </label>
        </p>
        <p>
          <label> Proof: <br/>
            <input
              type="text"
              id="proof"
              onChange={this.handleInputChange}
              placeholder="How Strong is This?"
            />
          </label>
        </p>
        <p>
          <label> Aged: <br/>
            <input
              type="text"
              id="aged"
              onChange={this.handleInputChange}
              placeholder="How Old?"
            />
          </label>
        </p>
        <p>
          <label> Flavornotes: <br/>
            <input
              type="textarea"
              id="flavornotes"
              onChange={this.handleInputChange}
              placeholder="write the flavors you taste here"
            />
          </label>
        </p>
        <p>
          <label> Food Pairing: <br/>
            <input
              type="text"
              id="pairing"
              onChange={this.handleInputChange}
              placeholder="pair it with any food?"
            />
          </label>
        </p>
        <input type="submit" />
      </form>
    )
  }
  
}


const mapStateToProps = (state) => {
    
    return { 
        bourbons: state.bourbons.bourbons,
        loading: state.bourbons.loading
    }
}


export default connect(mapStateToProps, {newBourbon})(NewBourbon);