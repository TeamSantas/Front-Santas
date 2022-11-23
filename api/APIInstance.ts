import axios from "axios";

const BASE_URL = 'https://pitapat-adventcalendar.shop';

// Axios 로직을 인스턴스화 하는 코드
let token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNTAxMzg4NDk4Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjkxNjIzNjUsImV4cCI6MTY3MTc1NDM2NX0.96FP8paw9K5z9_qIDvxzNfyRwEGpem8BOEhj2Kk5dDc';
const APIInstance = (baseURL: string) => {
    const apiInstance = axios.create({
        timeout: 8000,
        baseURL: baseURL,
        headers: {
            Auth : `${token}`,
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

const PresentInstance = APIInstance(BASE_URL);
const MemberInstance = APIInstance(BASE_URL);
const SettingInstance = APIInstance(BASE_URL);
const FriendsInstance = APIInstance(BASE_URL);
const AuthInstance = APIInstance(BASE_URL);

export {MemberInstance, FriendsInstance, PresentInstance, SettingInstance};
