import Child from './Child';
import { ClassComp, FuncComp, ArrowFuncComp } from './Component3types';
import BasicExpressions from './BasicExpressions';
import ObjectArrayExpressions from './ObjectArrayExpressions';
function Hello(){
  return <h1>hello</h1>
}
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
    </>
  )
}

export default App
