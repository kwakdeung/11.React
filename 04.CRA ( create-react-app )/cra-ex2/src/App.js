// 하나만 가져오기
import { myName1 } from "./components/Module1";
// 여러 개 가져올 때 { , } - 골라서 가져올 수 있다. (하나도 가능)
import { myAge1, myJob1 } from "./components/Module1";
// 한꺼번에 다 가져올 때는 as로 별칭을 만들어 주어야 한다.
import * as A02 from "./components/Module2";

import { myName3 } from "./components/Module3";
// default export 된 변수는 { }로 받으면 안된다.
// myName4가 export된 것이니 일반적으로 myName4로 import 하는 것뿐이다.
// 다른 이름을 사용해도 된다.
import myNameA from "./components/Module4";

// named 함수 import
import { getName1, getName2, getName3 } from "./components/Module5";
// default로 export 된 함수 : import 시 이름 결정
import getNameAAA from "./components/Module6";


function App() {
  return (
    <div className="App">
      <p>Module1 : {myName1} - {myAge1} - {myJob1}</p>
      <p>Module2 : {A02.myName2} - {A02.myAge2}</p>
      <p>Module3 : {myName3}</p>
      <p>Module4 : {myNameA}</p>

      <p>Module5 : {getName1()}</p>
      <p>Module5 : {getName2()}</p>
      <p>Module5 : {getName3()}</p>
      <p>Module6 : {getNameAAA()}</p>
      
    </div>
  );
}

export default App;
