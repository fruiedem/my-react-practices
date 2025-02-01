import './App.css';
import './Card.module.css';
import InfoCard from './InfoCard';
/*
1단계. InfoCard 컴포넌트 정의 및 props 전달
2단계. props spreading - 코드 중복 개선
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
        title="React Composition"
        content="Composition makes your components mor reusable"
        author="Charlie"
      />
    </>
  )
}

export default App
