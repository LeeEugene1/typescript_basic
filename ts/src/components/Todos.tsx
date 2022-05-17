import React from 'react'
// props : {items:string[]}처럼 일일이 지정해주는데신 @types/react패키지에서 정해준것을 사용
// FC는 FunctionComponent의 약자로 이미 제네릭타입
const Todos:React.FC<{items:string[]}> = (props) => {
    return (
      <ul>
          {props.items.map(item => <li key={item}>{item}</li>)}
        {/* <li>Learn React</li>
        <li>Learn TS</li> */}
    </ul>
    );
}
export default Todos