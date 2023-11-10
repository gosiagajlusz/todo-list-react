import {takeEvery,call,put} from "redux-saga/effects";
import { fetchExampleTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler(){
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put()
    } catch (error){}
}

function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type)
}