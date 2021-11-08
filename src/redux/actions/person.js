import { ADD_PERSON } from "../constant";

export const addPerson = personsObj => ({type: ADD_PERSON, payload: personsObj});