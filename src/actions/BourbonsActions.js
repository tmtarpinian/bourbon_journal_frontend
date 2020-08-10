const allBourbons = () => {
    return dispatch => {
        dispatch({type: 'LOADING_BOURBONS'})
        fetch("http://localhost:3001/bourbons")
        .then(response => response.json())
        .then(bourbons => dispatch({type: 'BOURBONS', payload: bourbons}))
    }
}

const newBourbon = bourbon => {
    return (dispatch) => {
      dispatch({type: 'LOADING_BOURBONS'})
      fetch("http://localhost:3001/bourbons", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(bourbon)
      })
      .then(response => response.json())
      .then(bourbon => dispatch({type: 'NEW_BOURBON', payload: bourbon}))
    }
}
  
const deleteBourbon = id => {
    return {
      type: 'DELETE_Bourbon',
      id
    };
  };

export {
    allBourbons,
    newBourbon,
    deleteBourbon
  }