import axios from "axios";

// http://192.168.30.119:8080/boards
// board.js를 각각의 컨테이너에서 import하게 해주기
//
export const boardList = () => axios.get("/boards");
