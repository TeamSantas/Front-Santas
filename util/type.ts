declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export const pageview = (url) => {
  if (typeof window !== "undefined") {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
};

export type ResponseData<T> = {
  status: number;
  message: string;
  data: T;
};

// Member types ------------------------------------
export interface MemberData {
  id: number;
  nickname: string;
  profileImageURL: string;
  email: string;
  invitationLink: string;
  todayPresentCount: number;
  setting: {
    id: number;
    isAlert: boolean;
    bgm: boolean;
    fcmtokens: string;
  };
}
export interface MemberRawData {
  member: MemberData;
}
export interface NewMemberData {
  id: number;
  nickname: string;
  profileImageURL: string;
  email: string;
  invitationLink: string;
  todayPresentCount: number;
  setting: {
    id: number;
    isAlert: boolean;
    bgm: boolean;
    fcmtokens: string;
  };
}

export interface PutMemberData {
  nickname: string;
  profileImageURL: string;
  statusMessage: string;
}

export const defaultMemberData = {
  id: -1,
  nickname: "",
  profileImageURL: "",
  email: "",
  invitationLink: "",
  setting: {
    id: -1,
    isAlert: false,
    bgm: false,
    fcmtokens: "",
  },
};

// Friends types ------------------------------------
export interface FriendsData {
  id: number;
  nickname: string;
  profileImgUrl: string;
  invitationLink: string;
  isPicked: boolean;
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

export interface presentDetail {
  id: number;
  receiverId: number;
  senderId: number;
  nickname: string;
  isAnonymous: boolean;
  isPublic: boolean;
  title: string;
  contents: string;
  imageURL: string[];
  receivedDate: string;
  isRead: boolean;
}
// Friend Search types

// Setting types ------------------------------------
export interface putPushData {
  alertStatus: boolean;
}
export interface putBGMData {
  bgmStatus: boolean;
}

///
export interface dataProps {
  data: object;
  link: string;
}

// Town(Board) types ------------------------------------

export interface BoardData {
  boardId: number;
  contents: string;
  createdAt: string;
  invitationLink: string;
  isAnonymous: boolean;
  likeCounts: number;
  reportCounts: number;
  profile: string;
  writerId: number;
  writerName: string;
  isBlur: boolean;
  isLiked: boolean;
}

export interface BoardForm {
  contents: string;
  writerId: number;
  writerName: string;
  isAnonymous: boolean;
}

export interface ReportData {
  boardId: number;
  writerId: number;
  type: "BOARD";
  reason?: string;
}
