export const ACTIONS = {
/*     INCREASE_ADDITIONAL: 'INCREMENT_ADDITIONAL',
    DECREASE_ADDITIONAL: 'DECREASE_ADDITIONAL', */
    ADD_FEATURE: 'ADD_FEATURE'
}

export const addFeature = (feature) => {
    console.log('feature value', feature)
    return {      
        type: ACTIONS.ADD_FEATURE,
        payload: feature
    }
  }