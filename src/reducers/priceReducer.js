import { data } from '../data';
import { ACTIONS } from '../actions'

const initialState = {...data}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.ADD_FEATURE:
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: { 
                    ...state.car,
                    features: [...state.car.features, action.payload]
                }
            };
        case ACTIONS.REMOVE_FEATURE:
            const newFeaturesArr = state.car.features.filter(feature => feature.id !== action.payload.id);
            console.log(newFeaturesArr);
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    features:[...newFeaturesArr]
                }
            }
        default:
            return state;
    };
};