import axios from "axios";

// 공통된 서버 경로 설정
axios.defaults.baseURL = "http://localhost:8080";

export function addAuthHeader(accessToken) {
  // 공통된 헤더(로그인 후 받은 토큰) 설정
  axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
}

export function removeAuthHeader() {
  // 공통된 헤더(로그인 후 받은 토큰) 제거
  delete axios.defaults.headers.common["Authorization"];
}

export default axios;
