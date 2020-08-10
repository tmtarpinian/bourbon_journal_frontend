import React, { Component} from 'react'
import Bourbon from '../components/Bourbon'
import { connect } from 'react-redux'

class BourbonsContainer extends Component{

    componentDidMount(){
        fetch("/bourbons")
        .then(response => response.json())
        .then(data => {
            this.setState({
                bourbons: data
            })
        })
    }

    handleClick = (event) => {
        console.log(event.target.id)
    }

    render() {
        // let categories = this.state.bourbons.map((bourbon, i) => {
        //     return <Category key={i} category={category.strCategory} handleClick={this.handleClick} />
        // })
        return (
            <div>
                <Bourbon />
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//       addRestaurant: (restaurant) => { dispatch(addRestaurant(restaurant)) }
//     }
//   }

  const mapStateToProps = (state) => {
  
    return { bourbons: state.bourbons}
  }

export default connect (mapStateToProps)(BourbonsContainer)