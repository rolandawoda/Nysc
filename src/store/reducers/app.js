import {APP_LOADING_COMPLETE} from '../actions/types';

const INIT_STATE = {
    isLoading: true
}

export default (state = INIT_STATE, action) => { 
    switch (action.type) {
        case APP_LOADING_COMPLETE: 
            return {
                ...state,
                isLoading: false
            }
        default: return state;    
    }
}