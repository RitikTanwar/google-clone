// console.log('Redux');
// import Redux from 'redux';
const redux = require('redux');
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const reduxLogger = require('redux-logger');

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICEXREAM = 'BUY_ICECREAM';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIcecream() {
    return {
        type: BUY_ICEXREAM
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIcecreams: 20
// }
const initialCakeState = {
    numOfCakes: 10
}
const initialIcecreamState = {
    numOfIcecram: 20
}
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1,
//         }
//         case BUY_ICEXREAM: return {
//             ...state,
//             numOfIcecreams: state.numOfIcecreams - 1,
//         }
//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1,
        }
        default: return state
    }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case BUY_ICEXREAM: return {
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1,
        }
        default: return state
    }
}

// const store = createStore(reducer);
const reducers = combineReducers({
    cakeReducer,
    icecreamReducer
})
const store = createStore(reducers)

console.log('Initial state ', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();