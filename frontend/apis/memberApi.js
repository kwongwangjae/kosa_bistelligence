import axios from "./AxiosConfig";

export async function login(member) {
  // member: {mid: "xxx", mpassword: "xxx"}
  const response = await axios.post("/member/login", member);
  // response.data: {mid: "xxx", mname: "xxx", accessToken: "xxx"}
  return response;
}

export function logout() {
  // 로그아웃 요청 (필요한 경우 서버에도 요청)
  // return axios.get("/member/logout");
}

export function join(member) {
  // member: {mid: "xxx", mname: "xxx", mpassword: "xxx", mrole: "ROLE_USER", menabled: 1}
  return axios.post("/member/join", member);
}
