import {put,takeEvery} from 'redux-saga/effects'

export function* sayHello(){
  console.warn("hello saga");
}

function* increment() {
  console.warn("This is increent saga");
}
export function* watchIncrement(){
    yield takeEvery("increment",increment)
}

function* decrement() {
  console.warn("this is decrement saga");
}
export function* watchDecrement(){
  yield takeEvery("decrement",decrement)
}
