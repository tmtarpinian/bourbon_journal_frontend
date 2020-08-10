import React, { Component } from 'react';
import { connect } from 'react-redux'
import {newBourbon} from '../actions/BourbonsActions'
import BourbonForm from '../components/BourbonForm'

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
    this.props.newBourbon(this.state)     
    this.setState({                     //this is NOT clearing the form out
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
      <BourbonForm handleInputChange={this.handleInputChange} handleOnSubmit={this.handleOnSubmit}/>
    )
  }
  
}

export default connect(null, {newBourbon})(NewBourbon);