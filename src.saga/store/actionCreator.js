import {
    CHANGE_INPUT_VALUE,
    DELETE_TODO_ITEM,
    ADD_INPUT_VALUE,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from './actionTypes'
import axios from 'axios';

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
const initListAction = data => ({
    type: INIT_LIST_ACTION,
    data
})

const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5b432caf078f0b5fea13767b/example/api/getTodoList').then(res => {
            const data = res.data.data
            const action = initListAction(data)
            // 返回的函数自动就会接收到dispatch方法
            dispatch(action)
        })
    }
}

const getInitList = () => ({
    type: GET_INIT_LIST,
})

export {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    initListAction,
    getTodoList,
    getInitList
}