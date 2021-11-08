import { ADD_PERSON } from "../constant";

export const createAddPersonAction = personsObj => ({type: ADD_PERSON, payload: personsObj});