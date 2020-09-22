export const ACTIONS = {
    ADD_FEATURE: 'ADD_FEATURE',
    REMOVE_FEATURE: 'REMOVE_FEATURE'
}

export const addFeature = (feature) => {
    console.log('feature value', feature)
    return {      
        type: ACTIONS.ADD_FEATURE,
        payload: feature
    }
  }

  export const removeFeature = (feature) => {
      return {
          type: ACTIONS.REMOVE_FEATURE,
          payload: feature
      }
  }