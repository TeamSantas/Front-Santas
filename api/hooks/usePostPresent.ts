// 실질적으로 api 당겨오는 로직을 처리하는 훅
import PresentService from "../PresentService";

export async function usePostPresent(data) {
  // TODO : 실제 데이터로 교체
  const formData = new FormData();
  formData.append("receiverId", "1");
  formData.append("nickname", "suyeon");
  formData.append("title", "Test title");
  formData.append("contents", "Test contents");
  formData.append("receivedDate", "2022-12-25");
  formData.append("isAnonymous", "true");
  formData.append("multipartFileList", data);

  // TODO : 리스트로 넘길 때도 확인해보기
  // if (e.target.files){
  //   let multipartFileList = [];
  //   for (const photo of e.target.files){
  //     multipartFileList.push(photo)
  //   }
  //   formData.append("multipartFileList", multipartFileList);
  // }

  const url = `https://pitapat-adventcalendar.shop/api/present`;

  const config = {
    Headers: {
      Auth: `${process.env.TOKEN}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const res = await PresentService.postPresent(url, formData, config);

  if (res.status === 200) {
    console.log("res >>> ", res);
    return res;
  }
}
