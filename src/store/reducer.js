import * as actionTypes from './actions';

const initialState = {
    slideIndex: 1,
    isMobile: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
    case actionTypes.INCREMENT:
        return {
            slideIndex: state.slideIndex - 1
        }
    case actionTypes.DECREMENT:
        return {
            slideIndex: state.slideIndex + 1
        }
    
    case actionTypes.INDEXTOONE:
        return {
            ...state,
            slideIndex: 1
        }
    
    case actionTypes.INDEXLENGTH:
        return {
            ...state,
            slideIndex: 2
        }
    case actionTypes.NOTMOBILE:
        return {
            ...state,
            isMobile: false
        }
    case actionTypes.SETMOBILE:
        return {
            ...state,
            isMobile: true
        }
    }
    return state;
};

export default reducer;