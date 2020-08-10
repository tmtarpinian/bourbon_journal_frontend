import React, { Component} from 'react'
import AddBourbon from '../components/AddBourbon'

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
                <h2>I am a test bourbon page</h2>
            </div>
        )
    }
}

export default CategoriesContainer