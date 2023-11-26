import { BoardData } from "../../util/type";
import { getTownAdID } from "../advertisement/ad-ids";

const getAdIndex = (idx) => Math.floor((idx + 1) / 7);

export const dummyBoardForAds = (idx) => {
  return {
    boardId: -1,
    contents: getTownAdID(idx),
    createdAt: "",
    invitationLink: "",
    isAnonymous: false,
    likeCounts: 0,
    reportCounts: 0,
    profile: "",
    writerId: -1,
    writerName: "adFit",
    isBlur: false,
    isLiked: false,
  };
};

export const getContentsWithAd = (contents) =>
  contents.reduce((acc: any[], cur: BoardData, idx: number) => {
    acc.push(cur);

    // 1~15번 광고 id로 애드핏 contents 추가
    if ((idx + 1) % 7 === 0 && (idx + 1) / 7 < 16) {
      acc.push(dummyBoardForAds(getAdIndex(idx)));
    }
    return acc;
  }, []);
