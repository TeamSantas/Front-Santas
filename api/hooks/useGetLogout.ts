import AuthService from "../AuthService";

export async function useGetLogout() {
    const res = await AuthService.getLogout();
    //답변에 따라 로그인이 완료 되었으면 홈화면, 아니면 에러창으로 (에러창에 로그인버튼이나 홈 있게)!
    // console.log(res.data);
    // return res.data;
}
