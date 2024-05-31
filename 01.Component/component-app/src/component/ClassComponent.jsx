import React from "react";

export class ClassComponent extends React.Component {
  // 생성자
  constructor(props) {
    super(props);

    // 상태정의
    this.state = {
      name: "Aloha",
    };

    // 컴포넌트에 아래 함수를 연결하는 바인딩 작업 필요!
    this.handleClickAloha = this.handleClickAloha.bind(this);
    this.handleClickPkh = this.handleClickPkh.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Alert 버튼 클릭시 - 함수
  handleClickAloha() {
    console.log("ah clock");
    this.setState({ name: "Aloha" });
  }
  handleClickPkh() {
    console.log("ah clock");
    this.setState({ name: "Pkh" });
  }

  // 버튼 클릭시
  handleClick(newName, newAge) {
    console.log(`click ${newName} `);
    this.setState({ name: newName });
  }

  render() {
    const { name } = this.state; // 구조분해
    return (
      <>
        <h1>class component</h1>
        <h2>Hello {name}</h2>
        <button onClick={() => this.handleClick("a")}>Aloha</button>
        <button onClick={() => this.handleClick("b")}>pkh</button>
      </>
    );
  }
}

export default ClassComponent;
