import {
    CHANGE_INPUT_VALUE,
    DELETE_TODO_ITEM,
    ADD_INPUT_VALUE
} from './actionTypes'

const getInputChangeAction = value => ({
    type: CHANGE_INPUT_VALUE,
    value
})
const getAddItemAction = () => ({
    type: ADD_INPUT_VALUE
})
const getDeleteItemAction = index => ({
    type: DELETE_TODO_ITEM,
    index
})

export {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction
}