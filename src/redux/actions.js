import { type } from "@testing-library/user-event/dist/type";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const addFav = (character) => {
    return character({type: ADD_FAV, payload: character});
    
} 

export const removeFav = (id) => {
    return {type: REMOVE_FAV, payload: id}
}