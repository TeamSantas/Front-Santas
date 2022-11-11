import axios from "axios";

const POST_BASE_URL = 'https://jsonplaceholder.typicode.com';
const BASE_URL = '추후 우리서버URL 나오면 넣기';

// Axios 로직을 인스턴스화 하는 코드
const APIInstance = (baseURL: string) => {
    const apiInstance = axios.create({
        timeout: 8000,
        baseURL: baseURL,
    });
    apiInstance.defaults.withCredentials = true;
    return apiInstance;
};

const PostInstance = APIInstance(POST_BASE_URL);
const PresentInstance = APIInstance(BASE_URL);
const MemberInstance = APIInstance(BASE_URL);
const SettingInstance = APIInstance(BASE_URL);
const FriendsInstance = APIInstance(BASE_URL);
const AuthInstance = APIInstance(BASE_URL);

export {PostInstance};
