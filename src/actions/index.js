export const ACTIONS = {
/*     INCREASE_ADDITIONAL: 'INCREMENT_ADDITIONAL',
    DECREASE_ADDITIONAL: 'DECREASE_ADDITIONAL', */
    ADD_FEATURE: 'ADD_FEATURE'
}

export const addFeature = (dispatch) => {
    return dispatch({type: ACTIONS.ADD_FEATURE})
    
  }