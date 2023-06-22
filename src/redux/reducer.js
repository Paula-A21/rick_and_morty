import {ADD_FAV, REMOVE_FAV, ORDER, FILTER} from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, actions) => {
    switch(actions.type){
        case ADD_FAV:
            return {...state, allCharacters: [...state.allCharacters, actions.payload]};
        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter((char) => char.id !== Number(actions.payload))};
        case FILTER:
            return {...state, myFavorites: [...state.allCharacters, state.allCharacters.filter((char) => char.gender === actions.payload)]};
        case ORDER: 
            return {
                ...state, 
                allCharacters: 
                [...state.allCharacters, 
                    actions.payload === "A" ?
                    state.allCharacters.id.sort(function(a, b) {return a - b}) :
                    state.allCharacters.id.sort(function(a, b) {return a - b}).reverse()
                ]
            }
        default:
            return {...state};
    }
}

export default rootReducer;