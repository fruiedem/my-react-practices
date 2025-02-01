import './App.css';
import './Card.module.css';
import InfoCard from './InfoCard';
/*
1단계. InfoCard 컴포넌트 정의 및 props 전달
2단계. props spreading - 코드 중복 개선
3단계. props 기본값 설정
 */
function App() {
  return (
    <>
      <InfoCard
        title="Props in React"
        content="Porps pass data from one component to another"
        author="Alice"
      />
      <InfoCard
      />
    </>
  )
}

export default App
