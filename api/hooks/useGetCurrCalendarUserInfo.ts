import FriendsService from "../FriendsService";
import {FriendsData, ResponseData} from "../../util/type";
import {AxiosResponse} from "axios";

export async function setGetCurrCalendarUserInfo(inviteLink) {
  const res : AxiosResponse<ResponseData<FriendsData>> = await FriendsService.getFriend(inviteLink);
  if (res.status === 200) return res.data.data;
}
