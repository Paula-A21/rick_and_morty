import {ADD_FAV, REMOVE_FAV, ORDER, FILTER} from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, actions) => {
    switch(actions.type){
        case ADD_FAV:
            return {
                ...state, 
                myFavorites: [...state.allCharacters, actions.payload],
                allCharacters: [...state.allCharacters, actions.payload]
            };
        case REMOVE_FAV:
            return {
                ...state, 
                myFavorites: state.myFavorites.filter((char) => char.id !== Number(actions.payload))
            };
        case FILTER:
            return {
                ...state, 
                myFavorites: 
                    actions.payload === "All" ?
                    [...state.allCharacters] :
                    state.allCharacters.filter((char) => char.gender === actions.payload)
                
            };
        case ORDER: 

            const allCharactersCopy = [...state.allCharacters];

            return {
                ...state, 
                myFavorites: 
                [...allCharactersCopy, 
                    actions.payload === "A" ?
                    allCharactersCopy.sort((a, b) => a.id - b.id) :
                    allCharactersCopy.id.sort((a, b) => b.id - a.id)
                ]
            }
        default:
            return {...state};
    }
}

export default rootReducer;