import { data } from '../data';
import { ACTIONS } from '../actions'

const initialState = {...data}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.ADD_FEATURE:
            return {
                ...state,
                additonalPrice: {...state.additonalPrice} + 15,
                car: { 
                    ...state.car,
                    features: [...state.car.features, 'new feature']
                }
            };
        default:
            return state;
    };
};

export default reducer;