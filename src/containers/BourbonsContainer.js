import React, { Component} from 'react'
import Bourbon from '../components/Bourbon'
import { connect } from 'react-redux'

class BourbonsContainer extends Component{


    state = {
        bourbons: [],
        bourbon: ""
    }

    componentDidMount(){
        fetch("http://localhost:3001/bourbons")
        .then(response => response.json())
        .then(data => {
            debugger
            console.log(data)
            this.setState({
                bourbons: data.results
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