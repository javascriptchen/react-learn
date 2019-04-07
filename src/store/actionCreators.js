import { DELETE_ITEM, ADD_ITEM, CHANGE_INPUT_VALUE } from "./actionTypes";

export const changeInputValue = value => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const addItem = () => ({
    type: ADD_ITEM,
})
export const deleteItem = index => ({
    type: DELETE_ITEM,
    index
})