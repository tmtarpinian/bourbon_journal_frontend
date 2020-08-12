const allCategories = () => {
    return dispatch => {
        dispatch({type: 'LOADING_CATEGORIES'})
        fetch("http://localhost:3001/categories")
        .then(response => response.json())
        .then(categories => dispatch({type: 'CATEGORIES', payload: categories}))
    }
}

const newCategory = category => {
    return (dispatch) => {
      dispatch({type: 'LOADING_CATEGORIES'})
      fetch("http://localhost:3001/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(category)
      })
      .then(response => response.json())
      .then(category => dispatch({type: 'NEW_CATEGORY', payload: category}))
    }
}

export {
    allCategories,
    newCategory
}