import {PostInstance} from "./APIInstance";
import {PostData, ResponseData} from "../util/type";

// Post관련 API를 APIInstance에 넣어줘서 axios 객체를 만들어주는 로직을 모아둔 곳
//여기선 api별 axios 객체만 만들고 실질적인 실행은 hooks에서 진행
class PostService{
    //모든 선물 불러오기 =>
    getALLPostData = () => {
        console.log(PostInstance.get<ResponseData<PostData>>(`/posts`));
        return PostInstance.get<ResponseData<PostData>>(`/posts`);
    };

    //TODO: 필요한 API들 다 적어보기

}
export default new PostService();
