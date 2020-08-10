import React, { Component} from 'react'
import Bourbon from '../components/Bourbon'

const URL = 'https://localhost:3001'

class CategoriesContainer extends Component{


    state = {
        bourbons: [],
        bourbon: ""
    }

    componentDidMount(){
        fetch(URL)
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

export default CategoriesContainer