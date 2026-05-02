import axios from "./AxiosConfig";
import { addAuthHeader, removeAuthHeader } from "./AxiosConfig";

export async function login(member) {
  // member: {mid: "xxx", mpassword: "xxx"}
  const response = await axios.post("/member/login", member);
  // response.data: {mid: "xxx", mname: "xxx", accessToken: "xxx"}
  
  if (response.data.accessToken) {
    addAuthHeader(response.data.accessToken);
  }
  
  return response;
}

export function logout() {
  removeAuthHeader();
  // 로컬 스토리지 정리
  localStorage.removeItem("mid");
  localStorage.removeItem("mname");
  localStorage.removeItem("accessToken");
}

export function join(member) {
  // member: {mid: "xxx", mname: "xxx", mpassword: "xxx", mrole: "ROLE_USER", menabled: 1}
  return axios.post("/member/join", member);
}

export function getMember(mid) {
  return axios.get(`/member/${mid}`);
}

export function updateMember(member) {
  return axios.put("/member/update", member);
}

export function deleteMember(mid) {
  return axios.delete(`/member/${mid}`);
}
