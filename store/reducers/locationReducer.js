import {LOCATION} from '../../constants/types';

const initialState = {
    thisLocation: null
};

const handler = {
    [LOCATION.GET_CURRENT_LOCATION]: (state, {payload}) => ({
        ...state,
        thisLocation: payload
    }),
    DEFAULT: state => state
}

export const locationReducer = (state = initialState, action) => {
    const handle = handler[action.type] || handler.DEFAULT;
    return handle(state, action)
}



