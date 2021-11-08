import { ADD_PERSON } from "../constant";

const initialState = [{id: "001", name: "tony", age: "20"}];
export default function person(preState = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_PERSON: return [payload, ...preState]; // 添加一个新的 person
    default: return preState;
  }
}