import { DECREMENT, INCREMENT, RESET } from "./counterTypes"

export const countIncrement = () =>{
    return{
        type:INCREMENT
    }
}

export const countDecrement = () =>{
    return{
        type:DECREMENT
    }
}

export const countReset = () =>{
    return{
        type:RESET
    }
}