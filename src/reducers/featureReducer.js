import { data } from '../data';
import { ACTIONS } from '../actions'
import AdditionalFeatures from '../components/AdditionalFeatures';

const initialState = {...data}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.ADD_FEATURE:
            const newAddFeaturesArr = state.additionalFeatures.filter(feature => feature.id !== action.payload.id);
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: { 
                    ...state.car,
                    features: [...state.car.features, action.payload]
                },
                additionalFeatures: [...newAddFeaturesArr]
            };
        case ACTIONS.REMOVE_FEATURE:
            const newCarFeaturesArr = state.car.features.filter(feature => feature.id !== action.payload.id);
            const newStoreFeaturesArr = [...state.additionalFeatures, action.payload];
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    features:[...newCarFeaturesArr]
                },
                additionalFeatures: [...newStoreFeaturesArr]
            }
        default:
            return state;
    };
};