import React, { Component} from 'react'
import Bourbon from '../components/Bourbon'
import { connect } from 'react-redux'
import {allBourbons} from '../actions/BourbonsActions'


class BourbonsContainer extends Component{

    componentDidMount(){
     this.props.allBourbons()
    }

    handleClick = (event) => {
        console.log(event.target.id)
    }

    render() {
        const bourbons = this.props.bourbons.map((bourbon, i) => <Bourbon key={i} bourbon={bourbon} />)
        return (
            <div>
                {bourbons}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return { 
        bourbons: state.bourbons.bourbons,
        loading: state.bourbons.loading
    }
}

export default connect (mapStateToProps, {allBourbons})(BourbonsContainer)