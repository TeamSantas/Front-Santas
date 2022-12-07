import { PresentInstance, PresentAuthInstance } from "./APIInstance";
import { postPresentData, ResponseData } from "../util/type";

class PresentService {
  //금일 총 선물개수
  getTodayCount = () => {
    return PresentInstance.get<ResponseData<any>>("/api/present/today/count");
  };

  // 날짜별 도착한 선물 개수 조회 (res : 배열 / 전체 날짜별 개수)
  getNumberOfReceivedPresents = (config) => {
    return PresentInstance.get<ResponseData<any>>(`/api/present/count`, config);
  };

  // 특정 날짜 선물 리스트 조회 API
  getDayPresentsList = (config) => {
    // console.log(
    //   PresentAuthInstance.get<ResponseData<any>>(`/api/present/list`)
    // );
    return PresentInstance.get<ResponseData<any>>(
      `/api/present/list`,
      config
    );
  };

  //내가 보낸 선물 리스트 조회 API🔑
  getUserSendPresentsList = () => {
    return PresentAuthInstance.get<ResponseData<any>>(`/api/present/my/send`);
  };

  //내가 받은 선물 리스트 조회 API🔑
  getUserReceivedPresentsList = () => {
    return PresentAuthInstance.get<ResponseData<any>>(
      `/api/present/my/receive`
    );
  };

  //로그인한 유저의 받은 모든 선물목록 조회 API 🔑
  getLoggedUserPresentList = () => {
    return PresentAuthInstance.get<ResponseData<any>>(
      `/api/present/my/receive`
    );
  };

  //선물 상세보기 🔑
  getDetailPresent = (presentId: number) => {
    return PresentInstance.get<ResponseData<any>>(
      `/api/present/detail/${presentId}`
    );
  };

  // 쪽지 보내기 API (쪽지or이미지and닉네임)
  postPresent = (formData: postPresentData) => {
    return PresentInstance.post<ResponseData<postPresentData>>(
      `/api/present`,
      formData
    );
  };
  postAuthPresent = (formData: postPresentData) => {
    return PresentAuthInstance.post<ResponseData<postPresentData>>(
      `/api/present`,
      formData
    );
  };

  //받은선물 공개 여부 설정 🔑
  putPresent_OnOff_Status = (presentId: number, isPublic: boolean) => {
    return PresentAuthInstance.put(`/api/present/${presentId}`, null, {
      params: { isPublic: isPublic },
    });
  };
}
export default new PresentService();
