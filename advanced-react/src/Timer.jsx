import React, { useState, useRef, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null); // 타이머 ID 저장
  console.log('Timer 컴포넌트 리렌더링 확인');
  useEffect(() => {
    // 타이머를 설정하고 timerRef에 ID 저장
    timerRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      // 컴포넌트 언마운트 시 타이머 클리어
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <p>시간: {count}</p>
    </div>
  );
}

export default Timer;
