import axios from "axios";

const BASE_URL = 'https://ec2-13-209-72-164.ap-northeast-2.compute.amazonaws.com';

// Axios 로직을 인스턴스화 하는 코드
const AuthAPIInstance = (baseURL: string) => {
    const apiInstance = axios.create({
        timeout: 8000,
        baseURL: baseURL,
        headers: {
            Auth : `${process.env.NEXT_PUBLIC_REFRESH_TOKEN}`,
        }
        
    });
    // 응답 인터셉터 추가
    apiInstance.interceptors.response.use(
        // 응답 데이터를 가공
        response => response,
        // 에러 처리하기 (error handling)
        error => {
            console.log(error)
            console.log(error.response.status)
            if(error.response.status === 401){

            }
            if(error.response.status === 403){

            }
            if(error.response.status === 404){

            }
          }
    );
    // apiInstance.defaults.withCredentials = true;
    return apiInstance;
};
const APIInstance = (baseURL: string) => {
    const apiInstance = axios.create({
        timeout: 8000,
        baseURL: baseURL
    });
    // 응답 인터셉터 추가
    apiInstance.interceptors.response.use(
        // 응답 데이터를 가공
        response => response,
        // 에러 처리하기 (error handling)
        error => error
    );
    // apiInstance.defaults.withCredentials = true;
    return apiInstance;
};
const PresentInstance = APIInstance(BASE_URL);
const MemberInstance = APIInstance(BASE_URL);
const SettingInstance = APIInstance(BASE_URL);
const FriendsInstance = APIInstance(BASE_URL);
const AuthInstance = APIInstance(BASE_URL);

export {MemberInstance, FriendsInstance, PresentInstance, SettingInstance};
