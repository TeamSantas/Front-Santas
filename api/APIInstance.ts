import axios from "axios";
import {getCookie} from "../businesslogics/cookie";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

let accessToken = null;
// let accessToken = getCookie('token');

// Token 필요한 Axios
const AuthAPIInstance = (baseURL: string) => {
  const apiInstance = axios.create({
    timeout: 8000,
    baseURL: baseURL,
    params: {},
    headers: {
      Authorization: `Bearer ${accessToken}`,
      // Authorization: `Bearer ${process.env.NEXT_PUBLIC_REFRESH_TOKEN}`
    },
  });
  // 응답 인터셉터 추가
  apiInstance.interceptors.response.use(
    // 응답 데이터를 가공
    (response) => response,
    // 에러 처리하기 (error handling)
    (error) => error
  );
  // apiInstance.defaults.withCredentials = true;
  return apiInstance;
};

// Token 필요없는 Axios
const APIInstance = (baseURL: string) => {
  const apiInstance = axios.create({
    timeout: 8000,
    baseURL: baseURL,
    params: {},
  });
  // 응답 인터셉터 추가
  apiInstance.interceptors.response.use(
    // 응답 데이터를 가공
    (response) => response,
    // 에러 처리하기 (error handling)
    (error) => error
  );
  // apiInstance.defaults.withCredentials = true;
  return apiInstance;
};

const PresentInstance = APIInstance(BASE_URL);
const PresentAuthInstance = AuthAPIInstance(BASE_URL);

const MemberAuthInstance = AuthAPIInstance(BASE_URL);
const MemberInstance = APIInstance(BASE_URL);

const SettingAuthInstance = AuthAPIInstance(BASE_URL);
const FriendsAuthInstance = AuthAPIInstance(BASE_URL);
const AuthInstance = APIInstance(null);
const AuthAuthInstance = AuthAPIInstance(BASE_URL);

export {
  PresentInstance,
  PresentAuthInstance,
  MemberAuthInstance,
  MemberInstance,
  SettingAuthInstance,
  FriendsAuthInstance,
  AuthInstance,
  AuthAuthInstance,
};
