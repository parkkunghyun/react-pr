import React from "react"; // React 라이브러리
import ReactDOM from "react-dom/client"; // ReactDOM 클라이언트 라이브러리
import "./index.css"; // 어플리케이션 초기 css
import App from "./App"; // App 컴포넌트를 가져옴, 최상위 컴포넌트
import reportWebVitals from "./reportWebVitals"; // 웹의 성능에 대한 상태 체크

// ReactDom.creatRoot -> Root엘리먼트를 만들게 됨
// id = root 인 실제 Dom요소를 지정
//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
