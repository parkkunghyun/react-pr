import "./App.css";
import React from "react";

// class 형 컴포넌트
//
class App extends React.Component {
  render() {
    const link = React.createElement(
      "a",
      {
        href: "http://www.google.com",
        target: "_blank",
        style: { color: "blue" },
      },
      "구글 사이트로 가기"
    );

    const box = React.createElement(
      "div",
      {
        className: "box",
      },
      "Box"
    );

    //react js 문법
    const element = React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Hello Element"),
      React.createElement("p", null, "this is element"),
      link,
      box
    );

    //jsx 엘리멘트 생성
    const element2 = (
      <>
        <h1>hello22 element</h1>
        <p>this is an element</p>
        <a href="http://google.com" style={{ color: "red" }}>
          google로 바로가기
        </a>
        <div className="box2">box2</div>
      </>
    );

    return element2;
  }
}

export default App;
