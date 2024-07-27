
import {createStore} from "redux/src";

// reducer: 상태 변경을 위한 순수 함사 ( 부수효과: 비동기코드가 없는 함수 )
// 카운터 상태 관리를 위한 리듀서 정의
/*
    param1(state) : 상태 변경 이전의 상태
    param2(action) : 상태를 어떻게 변경할지에 대한 명세
    return : 변경 후 새로운 상태값
 */

const counterReducer = (state, action) => {

    return state;
};

// 리덕스 스토어
// 스토어에는 여러 리듀서를 제공할 수 있다.
const store = createStore(counterReducer);

// 리액트의 index.js 에게 store 를 제공
export default store;