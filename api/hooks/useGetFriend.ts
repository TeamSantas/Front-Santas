import FriendsService from "../FriendsService";
import {AxiosResponse} from "axios";
import {FriendsData, ResponseData} from "../../util/type";

export async function setGetFriend() {
  const res : AxiosResponse<ResponseData<FriendsData>> = await FriendsService.getFriends();
  if (res.status === 200) return res.data.data;
}
