import {
    CHANGE_INPUT_VALUE,
    DELETE_TODO_ITEM,
    ADD_INPUT_VALUE,
    INIT_LIST_ACTION
} from './actionTypes'

const defaultState = {
    inputValue: "123",
    list: [1, 2]
}
export default (prevstate = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(prevstate))
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === ADD_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(prevstate))
        newState.list.push(newState.inputValue)
        newState.inputValue = ""
        return newState;
    }

    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(prevstate))
        newState.list.splice(action.index, 1)
        return newState;
    }
    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(prevstate))
        newState.list = action.data
        return newState;
    }


    return prevstate
}