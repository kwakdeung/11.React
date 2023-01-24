import AddNumber from './AddNumber';


const AddNumberRoot = () => {
  // 부모의 rootState를 props 에 rootState1 이름으로 받아 왔다
  // AddNumber에게 rootState2 이름으로 넘겨 준다.
  //console.log(props);
  return (   
    <div>
        <h3>숫자 증가 (Depth1)</h3>      
         <AddNumber></AddNumber>
    </div>
  );
}

export default AddNumberRoot;