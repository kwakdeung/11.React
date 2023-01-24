import React from 'react';

const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);


const Form = ({updateMainItem}) => {
  const [value, setValue] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  function handleInputChange(e) {
    const userValue = e.target.value;
    setErrorMessage("");
    if (includesHangul(userValue)) {
      setErrorMessage("한글은 입력할 수 없습니다.");
    }
    setValue(userValue.toUpperCase());
  }

  // 여기에서 다시 직접 구현
  function handleFormSubmit(e) {
    e.preventDefault();
    setErrorMessage("");

    // props 에서 받은 메서드에서는 컴포넌트의 지역변수를 체크할 수 없다.
    if (value === "") {
      setErrorMessage("빈 값으로 만들 수 없습니다.");
      return;
    }

    console.log("폼 onSubmit");
    // updateMainItem();
    updateMainItem(value);
  }
  
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="name" placeholder="영어 대사를 입력해주세요" 
             value={value}
             onChange={handleInputChange}            
      />
      <button type="submit">생성</button>
      <p style={{ color: "red" }}>{errorMessage}</p>
    </form>
  );
};

export default Form;