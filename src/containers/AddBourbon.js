import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addBourbon} from '../actions/BourbonsActions'

class AddBourbon extends Component {
    state = {
        name: "",
        distillery: "",
        proof: null,
        aged: null,
        flavornotes: "",
        pairing: "",
    }


  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBourbon()
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            id="name"
            onChange={this.handleInputChange}
            placeholder="name"
          />
        </p>
        <p>
          <input
            type="text"
            id="distillery"
            onChange={this.handleInputChange}
            placeholder="distillery"
          />
        </p>
        <p>
          <input
            type="text"
            id="proof"
            onChange={this.handleInputChange}
            placeholder="username"
          />
        </p>
        <p>
          <input
            type="text"
            id="aged"
            onChange={this.handleInputChange}
            placeholder="hometown"
          />
        </p>
        <p>
          <input
            type="textarea"
            id="flavornotes"
            onChange={this.handleInputChange}
            placeholder="write the flavors you taste here"
          />
        </p>
        <p>
          <input
            type="text"
            id="pairing"
            onChange={this.handleInputChange}
            placeholder="pair it with any food?"
          />
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


export default connect(mapStateToProps, {addBourbon})(AddBourbon);