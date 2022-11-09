import PostService from "../PostService";

// 실질적으로 api 당겨오는 로직을 처리하는 훅
export async function useGetAllPosts() {
    const res = await PostService.getALLPostData();
    console.log(res.data);
    return res.data;
}
