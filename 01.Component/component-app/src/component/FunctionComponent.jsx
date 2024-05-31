import React, { useState } from "react";

const FunctionComponent = () => {
  // useState를 사용하여, 상태 정의
  const [name, setName] = useState("aloha");

  // 버튼 클릭시
  const handleClick = (newName) => {
    console.log(`click ${newName}`);
    setName(newName);
  };
  return (
    <div>
      <h1>함수형 컴포넌트</h1>
      <h2>{name}</h2>
      <button onClick={() => handleClick("pppp")}>pppp</button>
      <button onClick={() => handleClick("aloha")}>aloha</button>
    </div>
  );
};

export default FunctionComponent;
