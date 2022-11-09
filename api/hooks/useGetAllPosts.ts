import PostService from "../PostService";

// 실질적으로 api 당겨오는 로직을 처리하는 훅
export async function useGetAllPosts() {
    const res = await PostService.getALLPostData();
    //res가 status 200/ok 인지 확인하기!

    console.log(res.data);
    return res.data;
}
//리액트 쿼리 사용하려면 여기에!
