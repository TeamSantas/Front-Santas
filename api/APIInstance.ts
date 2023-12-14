import axios from "axios";
import { getCookie } from "../businesslogics/reactCookie";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const loadAccessToken = () => {
  //여기서 getCookie로 토큰을 가져와서 만약 없으면 로그인링크로 푸시 / 있으면 로그인도있구나 판단 후 정상연결
  return getCookie("token");
};

// Token 필요한 Axios
export const AuthAPIInstance = (baseURL: string, serverToken = null) => {
  const apiInstance = axios.create({
    timeout: 15000,
    baseURL: baseURL,
    params: {},
    headers: {
      Authorization: `Bearer ${serverToken ?? loadAccessToken()}`,
    },
  });
  return apiInstance;
};

// Token 필요없는 Axios
const APIInstance = (baseURL: string) => {
  const apiInstance = axios.create({
    timeout: 8000,
    baseURL: baseURL,
    params: {},
  });
  return apiInstance;
};

export const APITextInstance = (baseURL: string) => {
  const apiInstance = axios.create({
    timeout: 15000,
    baseURL: baseURL,
    params: {},
    headers: {
      Authorization: `Bearer ${loadAccessToken()}`,
      "Content-Type": "text/plain",
    },
  });
  return apiInstance;
};

//파일타입
const APIFileInstance = (baseURL: string) => {
  const apiInstance = axios.create({
    timeout: 8000,
    baseURL: baseURL,
    params: {},
    headers: {
      Authorization: `Bearer ${loadAccessToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return apiInstance;
};
const PresentInstance = APIInstance(BASE_URL);
const PresentAuthInstance = AuthAPIInstance(BASE_URL);

const MemberAuthInstance = AuthAPIInstance(BASE_URL);
const MemberFileInstance = APIFileInstance(BASE_URL);

const SettingAuthInstance = AuthAPIInstance(BASE_URL);
const SettingAuthPostInstance = AuthAPIInstance(BASE_URL);

const FriendsAuthInstance = AuthAPIInstance(BASE_URL);
const FriendsInstance = APIInstance(BASE_URL);
const AuthInstance = AuthAPIInstance(BASE_URL);
const AuthAuthInstance = AuthAPIInstance(BASE_URL);

const PushInstance = AuthAPIInstance(BASE_URL);
const FcmInstance = APITextInstance(BASE_URL);

const TownInstance = APIInstance(BASE_URL);
const TownAuthInstance = AuthAPIInstance(BASE_URL);

const HeartAuthInstance = AuthAPIInstance(BASE_URL);
const HeartInstance = APIInstance(BASE_URL);

export {
  PresentInstance,
  PresentAuthInstance,
  MemberAuthInstance,
  MemberFileInstance,
  SettingAuthInstance,
  SettingAuthPostInstance,
  FriendsAuthInstance,
  FriendsInstance,
  AuthInstance,
  AuthAuthInstance,
  PushInstance,
  FcmInstance,
  TownAuthInstance,
  TownInstance,
  HeartInstance,
  HeartAuthInstance,
};
