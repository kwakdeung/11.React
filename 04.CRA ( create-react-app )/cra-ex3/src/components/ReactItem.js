
// inline style : 중괄호 두 개 주의 ! {{ }}
// - 바깥의 중괄호는 리액트의 변수라는 의미
// - 안쪽의 중괄호는 자바스크립의 객체 표시
// 밸류는 스트링으로 ...
function ReactItem(props) {
  return (  
    <li>
      <img src={props.img}
           alt='FavoriteImage'
          style={{width:"300px", border: "1px solid red"}} />
    </li>
  );  
}

export default ReactItem;