import {Cookies} from "react-cookie";

const cookies = new Cookies()

//useEffect를 못쓰는 상황일때 사용하는 get쿠키
export const getCookie = (name : string) => {
    return cookies.get(name);
}
// export const setCookie = (name : string, value: string, option?: any) => {
//     return cookies.set(name, value, {...option})
// }
//
// export const removeCookie = (name : string, option?: any) => {
//     return cookies.remove(name, {...option});
// }
