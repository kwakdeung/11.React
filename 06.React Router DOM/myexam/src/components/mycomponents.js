import {Route, Switch, NavLink, useParams} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home 컴포넌트
    </div>
  )
}

let contents = [
  {id:1, cate:'free', title:'자유 게시판', desc:'<h2>자유 게시판 리스트</h2>'},
  {id:2, cate:'qna', title:'Q&A 게시판', desc:'<h2>Q&A 게시판 리스트</h2>'},
  {id:3, cate:'faq', title:'FAQ 게시판', desc:'<h2>FAQ 게시판 리스트</h2>'},
];

function Desc() {
  let params = useParams();
  console.log("params", params);
  let topic_cate = params.topic_cate_var;
  // 기본값 설정
  let selected_item = {
    
    title: "Sorry", desc: "Not Found"
    
  }
  // 일치하는 값 찾기
  for (var i=0; i<contents.length; i++) {
    if (contents[i].cate === topic_cate) {
      selected_item = contents[i];
      break;
    }
  }


  return (
    <div>
      <h3>{selected_item.title}</h3>
      {selected_item.desc}
    </div>
  )
}

function Topics() {
  let liTag = [];
  for (var i=0; i<contents.length; i++) {
    liTag.push(
      <li key={contents[i].id}><NavLink to={"/Topics"+
            contents[i].cate}>{contents[i].title}</NavLink></li>
    )

  }
  return (
    <div>
      <h2>Topics</h2>
      <div>Topics 컴포넌트</div>
      <ul>
          <li><NavLink ex to="/Topics/free">자유 게시판 title</NavLink></li>
          <li><NavLink to="/Topics/qna">Q&A 게시판 title</NavLink></li>
          <li><NavLink to="/Topics/faq">FAQ 게시판 title</NavLink></li>
      </ul>
      <ul>
        {liTag}
      </ul>
      {/* <Switch>
          <Route exact path="/Topics/free">자유 게시판 title</Route>
          <Route path="/Topics/qna">Q&A 게시판 title</Route>
          <Route path="/Topics/faq">FAQ 게시판 title</Route>
      </Switch> */}
      <Route path="/Topics/:topic_cate_var">
        <Desc></Desc>
      </Route>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact 컴포넌트
    </div>
  )
}

export {Home, Topics, Contact}