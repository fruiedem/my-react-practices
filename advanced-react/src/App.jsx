import './App.css';
import './Card.module.css';
import InfoCard from './InfoCard';
/*
1단계. InfoCard 컴포넌트 정의 및 props 전달
2단계. props 구조분해할당 - 코드 중복 개선
3단계. props 기본값 설정
4단계. props spreading - 코드 가독성 개선
5단계. 컴포넌트 리스트 렌더링을 위한 객체 배열화
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

const cardData = [
  {
  idx: 1,
  title : "Props in React",
  content : "Porps pass data from one component to another",
  author : "Alice"
  },
  {
  idx: 2,
  title: "React Composition",
  content: "Composition makes your components more reusable",
  author : "Charlie"
  }
]
function App() {
  return (
    <>
      {cardData.map(cardData => <InfoCard key={cardData.idx} {...cardData}/>)}
    </>
  )
}

export default App
