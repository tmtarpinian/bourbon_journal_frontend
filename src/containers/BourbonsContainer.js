import React, { Component} from 'react'
import Bourbon from '../components/Bourbon'
import { connect } from 'react-redux'
import getBourbons from '../actions/getBourbons'


class BourbonsContainer extends Component{

    componentDidMount(){
     this.props.getBourbons()
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
  
    return { 
        bourbons: state.bourbons,
        loading: false
    }
  }

export default connect (mapStateToProps, {getBourbons})(BourbonsContainer)