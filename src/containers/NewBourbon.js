import React, { Component } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import {newBourbon} from '../actions/BourbonsActions'   //added this
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

    backToBourbons = () => {
      useHistory()
    }
    

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const goToBourbons = useHistory()   //added this 
    this.props.newBourbon(this.state)     
    this.setState({                     //this is NOT clearing the form out
      name: "",
      distillery: "",
      proof: null,
      aged: null,
      flavornotes: "",
      pairing: ""
    })
    return(goToBourbons.push('/bourbons'))   //added this
    
  }

  render() {
    return(
      <BourbonForm handleInputChange={this.handleInputChange} handleOnSubmit={this.handleOnSubmit}/>
    )
  }
  
}

export default connect(null, {newBourbon})(NewBourbon);