import Child from './Child';
import { ClassComp, FuncComp, ArrowFuncComp } from './Component3types';
function Hello(){
  return <h1>hello</h1>
}
function App() {


  return (
    <>
      <Hello/>
      <h2>world</h2>
      <Child/>
      <ClassComp/>
      <FuncComp/>
      <ArrowFuncComp/>
    </>
  )
}

export default App
