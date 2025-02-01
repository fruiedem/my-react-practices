import './App.css';
import './Card.module.css';
import InfoCard from './InfoCard';
/*
1단계. InfoCard 컴포넌트 정의 및 props 전달
2단계. props 구조분해할당 - 코드 중복 개선
3단계. props 기본값 설정
4단계. props spreading - 코드 가독성 개선
 */

const cardData1 = {
  title : "Props in React",
  content : "Porps pass data from one component to another",
  author : "Alice"
}

const cardData2 = {
  title: "React Composition",
  content: "Composition makes your components more reusable"
};
function App() {
  return (
    <>
      <InfoCard
        {...cardData1}
      />
      <InfoCard
        {...cardData2}
      />
    </>
  )
}

export default App
