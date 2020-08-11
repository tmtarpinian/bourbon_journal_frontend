import React, { Component} from 'react'
import Bourbon from '../components/Bourbon'
import { connect } from 'react-redux'
import { allBourbons, deleteBourbon } from '../actions/BourbonsActions'


class BourbonsContainer extends Component{

    componentDidMount(){
     this.props.allBourbons()
    }

    deleteOnSubmit = (event) => {
        this.props.deleteBourbon(event.target.id)
    }

    render() {
        const bourbons = this.props.bourbons.map((bourbon, i) => <Bourbon key={i} bourbon={bourbon} deleteButton={this.deleteOnSubmit}/>)
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

export default connect (mapStateToProps, {allBourbons, deleteBourbon})(BourbonsContainer)