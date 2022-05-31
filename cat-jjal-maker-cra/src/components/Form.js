import React from "react";

const Form = ({ updateMainCat }) => {
  const [value, setValue] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  // test(): 정규식과 문자열 간의 일치 항목에 대해 검색. boolean값 출력.
  // 정규 표현식 플래그 i: 대소문자를 구별하지 않는 매칭을 수행
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

  function handleInputChange(e) {
    const userValue = e.target.value;
    
    setErrorMessage('');
    if (includesHangul(userValue)) {
    setErrorMessage('한글은 입력할 수 없습니다.');
    }
    setValue(userValue.toUpperCase());
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setErrorMessage('');
    if (value === '') {
      setErrorMessage('빈 값으로 만들 수 없습니다.');
      // 아래 updateMainCat 함수를 호출하지 않고 그 전에 끝날수 있도록 처리
      return;
    }
    updateMainCat(value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        placeholder="영어 대사를 입력해주세요"
        value={value}
        onChange={handleInputChange}
      />
      <button type="submit">생성</button>
      {/* 바깥 {}: javascript를 쓰기 위해
          안쪽 {}: object를 쓰기 위해 */}
      <p style={{color: 'red'}}>{errorMessage}</p>
    </form>
  );
};

export default Form;