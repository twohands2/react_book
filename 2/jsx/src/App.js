import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  //const name = 'YBJ';
  let name = 'YBJ';
  //name = 'JBY';
  return (
    <Fragment>
      {/* 주석 */}
      <h1>{name} Hello World!</h1>
      <h1>{name === 'YBJ' ? 'YBJ가 맞습니다.' : 'YBJ가 아닙니다.'}</h1>
      {name === 'YBJ' ? <h1>YBJ가 맞습니다.</h1> : null}

    </Fragment>
  );
}

export default App;
