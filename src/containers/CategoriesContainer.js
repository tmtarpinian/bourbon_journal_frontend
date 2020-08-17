import React, { Component} from 'react'
import Category from '../components/Category'
import { connect } from 'react-redux'
import { allCategories, newCategory } from '../actions/CategoriesActions'
import NewCategory from '../components/NewCategory'


class CategoriesContainer extends Component{
    state = {
        clickForm: false,
        name: ""
    }

    componentDidMount(){
        this.props.allCategories()
    }
   

    handleInputChange = (event) => {
        this.setState({
        name: event.target.value
        });
    }

    handleOpenFormClick = (event) => {
        let newState = !this.state.clickForm
        this.setState({
          clickForm: newState
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.newCategory(this.state)
        // set a timeout with message
        this.setState({
        name: "",
        clickForm: false
        })
    }


    render() {
        const categories = this.props.categories.map((category, i) => <Category key={i} category={category} deleteButton={this.deleteOnSubmit}/>)
        return (
            <div>
                <div id="bourbon-categories">
                    <div className="container">
                        {/* <!-- Portfolio Section Heading--> */}
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Your Categories</h2>
                        {/* <!-- Icon Divider--> */}
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                            {/* <i class="fas fa-star"></i>  */}
                            </div>
                            <div className="divider-custom-line"></div>
                        </div>
                        {/* <!-- Portfolio Grid Items--> */}
                        <div className="row">
                            {categories}
                            
                        </div>
                    </div>
                    <input type="submit" value="Add a Category" onClick={this.handleOpenFormClick} className="btn btn-block btn-lg btn-secondary"/>
                </div>
                <div>
                    

                    {this.state.clickForm === false ? null : <div id="new-bourbon"> <NewCategory handleOnSubmit={this.handleOnSubmit} handleInputChange={this.handleInputChange}/> </div>}
                </div>
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


//this.props.match.params.id