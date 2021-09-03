//React负责逻辑控制，数据 -> VDOM
import React from 'react';
//ReactDOM渲染实际DOM，VDOM -> DOM
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const name = "React";

const obj = {
  firstName: "ivy",
  lastName: "Sunny"
}

const greet = <div>good</div>;

function formatName(name) {
  return name.firstName + '' + name.lastName;
}

const show = false;

const a = [0, 1, 2];

const jsx = (
  <div>
    <div>hello,{name}</div>
    <div>{formatName(obj)}</div>
    {greet}
    {show ? greet : '登陆'}
    {show && greet}
    <ul>
      {/* diff时候，首先比较type，然后是key，所以同级同类型，key必须唯一*/}
      {
        a.map(item => (
          < li key={item} > {item}</li>
        ))
      }
    </ul>
  </div >
);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/**
 * 基本使用 表达式用{}包裹
 * 函数
 * JSX对象
 * 条件语句
 * 数组
 * 属性
 * 模块化
 */