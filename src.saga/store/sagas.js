import {
    takeEvery,
    put
} from 'redux-saga/effects'
import {
    GET_INIT_LIST
} from './actionTypes';
import {
    initListAction
} from './actionCreator';
import axios from "axios";

function* fetchUser() {
    try {
        const res = yield axios.get(
            "https://www.easy-mock.com/mock/5b432caf078f0b5fea13767b/example/api/getTodoList"
        )
        const action = initListAction(res.data.data);
        yield put(action)
    } catch (error) {
        console.log("网络请求失败");
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, fetchUser);
}

export default mySaga;