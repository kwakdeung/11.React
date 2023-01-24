import { createStore } from "redux";

export default createStore(function(state, action) {
  if(state===undefined){
    // 사용할 변수 선언
    return {myNumber:5}
  }
  if(action.type==='INCREMENT') {
    // action의 종류와 값으로 동작 구성
    // console.log("store", state.myNumber);
    // console.log("store", action.val);
    return {...state, myNumber:state.myNumber + Number(action.val)}
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())