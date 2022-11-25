import {MemberAuthInstance, MemberInstance} from "./APIInstance";
import {MemberData, ResponseData} from "../util/type";


class MemberService{
    //내정보 조회 🔑(마이페이지 조회)
    getLoggedMember = () => {
        console.log(MemberAuthInstance.get<ResponseData<MemberData>>(`/api/member`));
        return MemberAuthInstance.get<ResponseData<MemberData>>(`/api/member`);
    };
    //특정 유저정보 조회(익명이 특정 유저 검색)

    //유저 정보 수정 🔑

}
export default new MemberService();
