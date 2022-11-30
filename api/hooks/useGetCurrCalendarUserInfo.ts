import FriendsService from "../FriendsService";
import {FriendsData, ResponseData} from "../../util/type";
import {AxiosResponse} from "axios";

export async function setGetCurrCalendarUserInfo(inviteLink) {
  const config = { 
    params: {
      link: inviteLink,
    },
  };
  return await FriendsService.getFriend(config);
}
