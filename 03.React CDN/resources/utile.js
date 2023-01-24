const REACT1 = "./images/react1.png";
const REACT2 = "./images/react2.png";
const REACT3 = "./images/react3.png";
const REACT4 = "./images/react4.png";
const REACT5 = "./images/react5.png";
const REACT6 = "./images/react6.png";
const REACT7 = "./images/react7.png";
const REACT8 = "./images/react8.png";
const REACT9 = "./images/react9.png";
const items = [REACT1, REACT2, REACT3, REACT4, REACT5,
               REACT6, REACT7, REACT8, REACT9];

const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);


const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  console.log(1, responseJson);
  console.log(2, responseJson.url);
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};