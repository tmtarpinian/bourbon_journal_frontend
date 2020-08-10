export const addBourbon = bourbon => {
    return {
      type: 'ADD_BOURBON',
      bourbon
    };
  };
  
  export const removeBourbon = id => {
    return {
      type: 'REMOVE_Bourbon',
      id
    };
  };