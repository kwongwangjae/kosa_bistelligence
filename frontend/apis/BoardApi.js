import axios from "./AxiosConfig";

export function getBoardList(pageNo = 1) {
  return axios.get("/board/list", { params: { pageNo } });
}

export function getBoard(bno) {
  return axios.get("/board/" + bno);
}

export function createBoard(board) {
  // board: FormData (multipart/form-data)
  return axios.post("/board/create", board);
}

export function updateBoard(board) {
  // board: FormData (multipart/form-data)
  return axios.post("/board/update", board);
}

export function deleteBoard(bno) {
  return axios.delete("/board/" + bno);
}
