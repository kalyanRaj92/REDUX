const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

function buyCake(){
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}

function buyIceCream(){
    return{
        type:BUY_ICE_CREAM
    }
}

//Single State

/* const initialState = {
    numOfCakes: 10,
    numOfIceCream: 20
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE:
            return {...state, numOfCakes: state.numOfCakes - 1}
        case BUY_ICE_CREAM:
            return {...state, numOfIceCream: state.numOfIceCream - 1}

        default: return state
    }
}  */

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCream: 20
}

const cakeReducer = (state = initialCakeState, action) =>{
    switch(action.type){
        case BUY_CAKE:
            return {...state, numOfCakes: state.numOfCakes - 1}

        default: return state
    }
}

const IceCreamReducer = (state = initialIceCreamState, action) =>{
    switch(action.type){
        case BUY_ICE_CREAM:
            return {...state, numOfIceCream: state.numOfIceCream - 1}

        default: return state
    }
}

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCeram: IceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
const unSubscribe = store.subscribe(() => {});
//const store = createStore(rootReducer);
//const store = createStore(reducer);
//console.log(redux);
//console.log(store);
console.log("Initial State", store.getState());
//const unSubscribe = store.subscribe(() => console.log('Updated State', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unSubscribe();