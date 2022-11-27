import MemberService from "../MemberService";
import {useEffect, useState} from "react";
import {MemberData} from "../../util/type";

export const useLoggedMember = () => {
    const [memberData, setMemberData] = useState<MemberData>();
    const run = async () => {
        const res = await MemberService.getLoggedMember();
        setMemberData(res.data.data);
    }
    useEffect(()=>{
        run();
    },[])
    return memberData;
}

// export async function usePutMemberInfo(
//     nickname : string,
//     profileImageURL: string,
//     statusMessage: string
// ) {
//     const putMemberData : PutMemberData {
//         nicknames : nickname,
// //     profileImageURL: profileImageURL,
// //     statusMessage: statusMessage
//     };
//     await MemberService.putLoggedMember(putMemberData)
// }
