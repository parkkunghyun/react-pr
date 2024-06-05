import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import BoardListContainer from "./components/board/BoardListContainer";
import BoardReadContainer from "./components/board/BoardReadContainer";
import BoardInsertContainer from "./components/board/BoardInsertContainer";
import BoardUpdateContainer from "./components/board/BoardUpdateContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/boards" element={<BoardListContainer />}></Route>
        <Route path="/boards/:no" element={<BoardReadContainer />}></Route>
        <Route path="/boards/insert" element={<BoardInsertContainer />}></Route>
        <Route
          path="/boards/update/:no"
          element={<BoardUpdateContainer />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/boards">게시판</Link>
    </div>
  );
}

export default App;
