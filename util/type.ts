declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export const pageview = (url) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

export type ResponseData<T> = {
    status: string;
    message: string;
    data: T;
};

// Member types ------------------------------------
export interface MemberData {
  id: string;
  nickname: string;
  profileImageURL: string;
  email: string;
  invitationLink: string;
  setting : {
    id: string;
    isAlert: boolean;
    bgm: boolean;
    fcmtokens: string;
  }
}
export interface PutMemberData{
  nickname: string;
  profileImageURL: string;
  statusMessage: string;
}

// Friends types ------------------------------------
export interface FriendsData {
  memberId: string;
  friendId: string;
  uuid: string;
  profileImageURL: string;
  name: string;
  allowedMsg: boolean;
  isFavorite: boolean;
}

// Present types ------------------------------------
export interface postPresentData {
  receiverId: number;
  nickname: string;
  title: string;
  contents?: string;
  receivedDate: string;
  isAnonymous: boolean;
  multipartFileList?: string[]; // TODO : 형식 체크
}

// Setting types ------------------------------------
export interface putPushData {
  alertStatus: boolean
}
export interface putBGMData {
  bgmStatus: boolean
}
