import React, {Component, Fragment} from 'react';

/*
 * 클래스형 컴포넌트는 state기능 및 라이프사이클 기능을 사용할 수 있으며,
 * 임의의 메소드를 정의할 수 있다.
 */
class App extends Component{
  check = (name) => {
    return name === 'YBJ' ? 'YBJ가 맞습니다.' : 'YBJ가 아닙니다.';
  }

  render(){
    const name = 'YBJ';
    return (
      <Fragment>
        <h1>{name} Hello World!</h1>
      </Fragment>
    );
  }
}

export default App;
