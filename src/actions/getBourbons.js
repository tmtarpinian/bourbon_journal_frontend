const getBourbons = () => {
    return dispatch => {
        dispatch({type: 'LOADING_BOURBONS'})
        fetch("http://localhost:3001/bourbons")
        .then(response => response.json())
        .then(bourbonData => dispatch({type: 'BOURBONS', payload: bourbonData}))
    }
}

const addBourbon = bourbon => {
    return {
      type: 'ADD_BOURBON',
      bourbon
    };
  };
  
const removeBourbon = id => {
    return {
      type: 'DELETE_Bourbon',
      id
    };
  };

export {
    getBourbons,
    addBourbon,
    removeBourbon
  }