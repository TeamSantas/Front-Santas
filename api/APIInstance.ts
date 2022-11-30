import axios from "axios";
import {getCookie} from "../businesslogics/reactCookie";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const accessToken = getCookie('token');

// Token 필요한 Axios
const AuthAPIInstance = (baseURL: string) => {
  const apiInstance = axios.create({
    timeout: 8000,
    baseURL: baseURL,
    params: {},
    headers: {
      Authorization: `Bearer ${accessToken}`,
      // Refresh : `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNTQ5MTUzNDc0Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Njk3NzEzNjMsImV4cCI6MTY2OTc3MTk2M30.7nT5zjBbjhnFDQdzAL1NHNf1V1OdbIyFlvaOeu4cWL4`
    },
  });
  // 응답 인터셉터 추가
  apiInstance.interceptors.response.use(
    // 응답 데이터를 가공
    (response) => response,
    // 에러 처리하기 (error handling)
    (error) => {
        console.log(error);
      // console.log(error.response.data.code);
      // if(error.response.data.code === '403')
        //여기에 403(만료에러) 반환되면 엑세스토큰 대신 리프레시 넣어서 재요청하게
    }
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
    (error) => console.log(error)
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
