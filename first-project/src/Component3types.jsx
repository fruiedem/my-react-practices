import react, {Component} from 'react';
class ClassComp extends Component {
    render(){
        return <p>Class component</p>
    }
}

function FuncComp () {
    return <p>Function component</p>
}

const ArrowFuncComp = () => {
    return <p>Arrow Function component</p>
}

export {ClassComp, FuncComp, ArrowFuncComp} // 여러 모듈을 export 할 경우