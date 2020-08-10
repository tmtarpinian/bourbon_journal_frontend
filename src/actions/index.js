export const addBourbon = bourbon => {
    return {
      type: 'ADD_BOURBON',
      bourbon
    };
  };
  
  export const removeBourbon = id => {
    return {
      type: 'DELETE_Bourbon',
      id
    };
  };