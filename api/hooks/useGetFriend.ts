import FriendsService from "../FriendsService";
import {AxiosResponse} from "axios";
import {FriendsData, ResponseData} from "../../util/type";

export async function setGetFriend() {
  return await FriendsService.getFriends();
}
