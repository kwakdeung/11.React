import React from 'react';
import './App.css';
import MainCard from './components/MainCard';
import Form from './components/Form';
import Favorites from './components/Favorites';
import Title from './components/Title';


const REACT1 = "./images/react1.png";

const items = [REACT1];



const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  console.log(1, responseJson);
  console.log(2, responseJson.url);
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};


// App을 객체화. target 추가할 때 모양 주의!!!
const App = () => {    
  const [mainImg, setMainImg] = React.useState(REACT1);    
  // App이 불릴 때(Refresh)마다 로컬스토리지를 사용하게 됨.
  // 함수를 사용하면 처음에 한 번만 로컬스토리지를 사용하게 됨.
  // const [counter, setCounter] = React.useState(
  //   jsonLocalStorage.getItem("counter") || 0
  // );
  const [counter, setCounter] = React.useState(() => {
    return jsonLocalStorage.getItem("counter");
  });
  // const [favorites, setFavorites] = React.useState(
  //   jsonLocalStorage.getItem("favorites") || []        
  // );
  const [favorites, setFavorites] = React.useState(() => {
    return jsonLocalStorage.getItem("favorites") || []        
  });
  

  async function setInitialCat() {
    const catUrl = await fetchCat("Input cat's dialog~");
    setMainImg(catUrl);
  }
  //setInitialCat();
  React.useEffect(() => {
    setInitialCat();
  }, []);
  // []         : 컴포넌트가 처음 생길 때만 실행된다.
  // [counter]  : counter가 바뀔때마다 실행된다.


  async function updateMainItem(value) {              // 1-2
    const catUrl = await fetchCat(value);  // 1-1
    setMainImg(catUrl);

    // const nextCounter = counter + 1;
    // setCounter(nextCounter);                          
    // jsonLocalStorage.setItem("counter", nextCounter); 
    setCounter((prev) => {
      const nextCounter = prev + 1;
      jsonLocalStorage.setItem("counter", nextCounter);
      return nextCounter;
    });         
  }
  function handleHeartClick() {
    const nextFavorites = [...favorites, mainImg];
    setFavorites(nextFavorites);
    jsonLocalStorage.setItem("favorites", nextFavorites);
  }

  const bAlreadyFavorite = favorites.includes(mainImg);
  const counterTitle = counter === 0 ? "" : counter + "번째 ";

  return (
    <div>
      <Title>React Study {counterTitle}</Title>  
      <Form updateMainItem={updateMainItem} />
      <MainCard img={mainImg} 
                onHeartClick={handleHeartClick}
                alreadyFavorite={bAlreadyFavorite} />
      <Favorites favorites={favorites} />
    </div>
  );
};

export default App;
