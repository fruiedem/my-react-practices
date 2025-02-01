import './App.css';
import './Card.module.css';
import InfoCard from './InfoCard';
import ProductCard from './ProductCard';
import CardLayout from './CardLayout';
import withConditionalCard from './withConditionalCard';
import SimpleCard from './SimpleCard';
import Button from './Button';
/*
InfoCard.jsx
1단계. InfoCard 컴포넌트 정의 및 props 전달
2단계. props 구조분해할당 - 코드 중복 개선
3단계. props 기본값 설정
4단계. props spreading - 코드 가독성 개선
5단계. 컴포넌트 리스트 렌더링을 위한 객체 배열화

ProductCard.jsx
6단계. 함수 Props 전달

CardLayout.jsx
7단계. JSX요소 props 전달

8단계. 고차 컴포넌트

9단계. 이벤트 핸들러
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

const product = {
  name: "laptop",
  price: 123.456
}

const layouts = [
  {
    title: "About",
    elem: <p>Props of Components</p>
  },
  {
    title: "Details",
    elem: (<ul>
      <li>Feature A</li>
      <li>Feature B</li>
      <li>Feature C</li>
    </ul>)
  },
  {
    title: "Contact",
    elem: (
      <>
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-780</p>
      </>
    )
  }

]

const ConditionalSimpleCard = withConditionalCard(SimpleCard)
function App() {
  function handleClick(){
    console.log('Event 1: 함수 호출');
  }
  return (
    <>
      {cardData.map(cardData => <InfoCard key={cardData.idx} {...cardData}/>)}
      <ProductCard 
        {...product}
        formatPrice = {(p) => `$${p.toFixed(2)}`}
      />
      {/* JSX요소 props로 전달 */}
      {layouts.map((p)=>
        <CardLayout title={p.title}>
          {p.elem}  
        </CardLayout>
      )}
      {/* 고차 컴포넌트 */}
      <ConditionalSimpleCard
        title="Active Card"
        content="This card is active."
        disabled={false}
        />
      <ConditionalSimpleCard
        title="Disabled Card"
        content="This card is disabled."
        disabled={true}
        />  
      {/* 이벤트 핸들러 */}
      <Button name="Home"/>
      <Button name="Store"/>
      <Button name="Contact"/>
    </>
  )
}

export default App
