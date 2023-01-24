// 클래스나 함수를 내보낼 때 세미콜론을 붙이지 않는다.

// 직접 export
export function getName1() {
  return "이순신";
}

function getName2() {
  return "강감찬";
}

function getName3() {
  return "을지문덕";
}


// 나중에, 한꺼번에 export
export {getName2, getName3}