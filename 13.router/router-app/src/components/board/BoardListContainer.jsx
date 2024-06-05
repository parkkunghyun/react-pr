import React from "react";
import { Link } from "react-router-dom";
import * as api from "../../api/boards.js";
import { useState } from "react";
import { useEffect } from "react";

const BoardListContainer = () => {
  const [boardList, setBoardList] = useState([]);

  const getBoardList = async () => {
    const response = await api.boardList(); // boardList 받은걸 state에 설
    // axios - [GET] - /boards 요청
    setBoardList(response.data);
  };

  useEffect(() => {
    getBoardList();
  }, []); // 한번만 getBoardList가 실행되었을때 렌더링되게 만들기!

  return (
    <div>
      <h1>게시글 목록</h1>
      <Link to="/boards/insert">글쓰기</Link>
      <hr />
      <Link to="/boards/10">게시글 조회</Link>
    </div>
  );
};

export default BoardListContainer;
