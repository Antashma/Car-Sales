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
        default:
            return state;
    };
};