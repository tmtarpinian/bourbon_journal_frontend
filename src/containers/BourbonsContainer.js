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
        const bourbons = this.props.bourbons.map((bourbon, i) =>
         <Bourbon key={i} bourbon={bourbon} />
        )
       
        return (
            <div>
                {/* <Bourbon /> */}
                {bourbons}
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
        bourbons: state.bourbons.bourbons,
        loading: state.bourbons.loading
    }
  }

export default connect (mapStateToProps, {getBourbons})(BourbonsContainer)