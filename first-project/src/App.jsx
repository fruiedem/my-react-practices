import Child from './Child';
import { ClassComp, FuncComp, ArrowFuncComp } from './Component3types';
import BasicExpressions from './BasicExpressions';
import ObjectArrayExpressions from './ObjectArrayExpressions';
import FunctionExpressions from './FunctionExpressions';
import IsLoggedIn from './lsLoggedIn';
import userStatus from './UserStatus';
import Operators from './Operators';
import ListRendering from './ListRendering';
import InputStyling from './InputStyling';
import reactLogo from './assets/react.svg';
import './App.css'; // #root 적용 위치 확인
function Hello(){
  return <h1>hello</h1>
}
const reactLogoAlt = "React Logo"
console.log(reactLogo); // 개발모드 : /src/assets/react.svg 빌드모드 : /assets/react-CHdo91hT.svg (파일명은 계속 바뀜)

function App() {


  return (
    <>
      <Hello/>
      <h2>world</h2>
      <Child/>
      <h2>----- 컴포넌트 정의 3가지 -----</h2>
      <ClassComp/>
      <FuncComp/>
      <ArrowFuncComp/>
      <h2>----- 중괄호 표현식 사용 -----</h2>
      <BasicExpressions/>
      <h2>----- 객체와 배열의 사용 -----</h2>
      <ObjectArrayExpressions/>
      <h2>----- 함수 호출문 사용 -----</h2>
      <FunctionExpressions/>
      <h2>----- 중괄호 표현식과 JSX 활용 : 조건부 렌더링 -----</h2>
      <IsLoggedIn/>
      <h2>----- 중괄호 표현식과 JSX 활용 : 조건부 렌더링(2) -----</h2>
      {userStatus("admin")}
      <h2>----- 중괄호 표현식과 JSX 활용 : 조건부 렌더링(3) -----</h2>
      <Operators/>
      <h2>----- 중괄호 표현식과 JSX 활용 : 조건부 렌더링(4) 과 리스트렌더링 -----</h2>
      <ListRendering/>
      <h2>JSX속성과 스타일링</h2>
      <InputStyling/>
      <h2>img 태그의 src 속성</h2>
      <img
        src = {reactLogo}
        alt = {reactLogoAlt}
        width={256}
        height={228}
      />
    </>
  )
}

export default App
