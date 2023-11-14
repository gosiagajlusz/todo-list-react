import { takeEvery, call, put, takeLatest, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

export function* tasksSaga() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak");
  }
}

function* saveTasksInLocalStorageHandler(){
const tasks = yield select(selectTasks );
yield call(saveTasksInLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
  yield takeLatest(fetchExampleTasks.type, tasksSaga);
  yield takeEvery("*", saveTasksInLocalStorageHandler)
}
