import { DECREMENT, INCREMENT, RESET } from "./counterTypes";

const initialState = {
    count:0
}

export const countReducer = (state = initialState, action) =>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            }
        case RESET:
            return{
                ...state,
                count:state.count = 0
            }
        default:
            return state;
    }
}