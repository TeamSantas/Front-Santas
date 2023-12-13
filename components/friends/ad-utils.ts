import { FriendsData } from "../../util/type";
import { getTownAdID } from "../advertisement/ad-ids";

const getAdIndex = (idx) => Math.floor((idx + 1) / 7);

export const dummyFriendForAds = (idx) => {
  return {
    id: -1,
    nickname: "adFit",
    profileImgUrl: "",
    invitationLink: getTownAdID(idx),
    isPicked: false,
  };
};

export const getFriendsWithAd = (friends, numberOfAds) =>
  friends.reduce((acc: any[], cur: FriendsData, idx: number) => {
    acc.push(cur);

    // 1~4번 광고 id로 애드핏 friends 추가
    if ((idx + 1) % 7 === 0 && (idx + 1) / 7 < numberOfAds + 1) {
      acc.push(dummyFriendForAds(getAdIndex(idx)));
    }
    return acc;
  }, []);
