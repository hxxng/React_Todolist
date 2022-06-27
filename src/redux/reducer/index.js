import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

// 객체의 형태를 정의하기 위해 ES6의 객체리터럴 단축문법을 사용
const rootReducer = combineReducers({
    todo: todoReducer, // 변수이름 대신 키 지정
});

export default rootReducer;
