import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // 버튼 클릭 시 input에 포커스 설정
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>포커스 설정</button>
    </div>
  );
}

export default FocusInput;
