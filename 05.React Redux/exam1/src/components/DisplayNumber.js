import React from 'react';
import store from "../store";

const DisplayNumber = () => {
  
  // 훅 : 변수 설정
  const [myNum, setMyNum] = React.useState(5);

  // 훅 : 메서드 실행 (최초 한 번)
  React.useEffect(() => {
    console.log('store 구독 등록');
    store.subscribe(()=>{
      console.log("DisplayNumber", store.getState().myNumber);
      setMyNum(Number(store.getState().myNumber));
    });
  });

  return (
    <div>
      <h4>숫자 출력 Form (Depth2)</h4>
      <input type="text" value={myNum} readOnly ></input>
    </div>
  );
};

export default DisplayNumber;