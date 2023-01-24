
// 숫자 증가
import React from 'react';
import store from "../store";


const AddNumber = () => {
  // 부모의 rootState1을 props에 rootState2 이름으로 받아 왔다.
  //console.log(props);

  // input의 변화를 저장하기 위한 로컬 변수 처리
  const [addNum, setAddNum] = React.useState(1);

  return (
    <div>
        <h4>숫자 증가 Form (Depth2)</h4>
        <p>숫자를 변경한 후 증가 버튼을 누르세요</p>
        <input type="number" value={addNum}
            onChange={(e) => {
              //console.log(e);
              setAddNum(e.target.value)
            }}>
        </input>      
        <input type="button" value="증가"
            onClick={(e) => {
              // props.rootState2의 setRootNumber를 호출하면
              // 최상위의 setRootNumber가 호출된다.
              store.dispatch({type: 'INCREMENT', val: addNum});
            }}>
        </input>            
    </div>
  );
}

export default AddNumber;