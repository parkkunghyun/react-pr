import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Hello = () => {
  // useEffect는 컴포넌트가 생성될때 불림
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>hello</h1>;
};

const CleanUp = () => {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((showing) => !showing);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
};

export default CleanUp;
