import React, { Component} from 'react'
import Category from '../components/Category'
import { connect } from 'react-redux'
import { allCategories, newCategory } from '../actions/CategoriesActions'


class CategoriesContainer extends Component{

    componentDidMount(){
     this.props.allCategories()
    }

    // deleteOnSubmit = (event) => {
    //     this.props.deleteCategory(event.target.id)
    // }

    render() {
        const categories = this.props.categories.map((category, i) => <Category key={i} category={category} deleteButton={this.deleteOnSubmit}/>)
        return (
            <div>
                {categories}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return { 
        categories: state.categories.categories,
        loading: state.categories.loading
    }
}

export default connect (mapStateToProps, {allCategories, newCategory})(CategoriesContainer)