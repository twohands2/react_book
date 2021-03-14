import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//JSX는 HTML태그를 사용할 수 있으며, 코드를 보기 쉽게 만들 수 있어 가독성이 높습니다.
//<App /> 처럼 JS파일을 import하여 HTML태그처럼 사용할 수 있다.
//ReactDOM.render() : 컴포넌트를 페이지에 렌더링함.
//<React.StrictMode> : 리액트 프로젝트에서 레거시 기능들을 사용하지 못함.
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
