interface IContent {
  id: number;
  name: string;
  profile: string;
  createdAt: string;
  content: string;
  like: string;
  anonymous: boolean;
  code: string;
}

export const popularContents: IContent[] = [
  {
    id: 1,
    name: "",
    profile: "",
    createdAt: "2023. 12. 01 20:22:11",
    content:
      "두어캘 재밌다 누가 만들었냐 두어캘 재밌다 누가 만들었냐 두어캘 재밌다 누가 만들었냐 두어캘 재밌다 누가 만들었냐",
    like: "1225",
    anonymous: true,
    code: "asdf314",
  },
  {
    id: 2,
    name: "집언제가",
    profile: "/assets/image/town/default-profile.png",
    createdAt: "2023. 12. 01 20:22:11",
    content: "모두 행복하세요 ~ ^^ @-8---",
    like: "987",
    anonymous: false,
    code: "asdf314",
  },
  {
    id: 3,
    name: "박수연",
    profile: "/assets/image/town/default-profile.png",
    createdAt: "2023. 12. 01 20:22:11",
    content: "내 캘린더 놀러오셈",
    like: "779",
    anonymous: false,
    code: "asdf314",
  },
];

export const allContents: IContent[] = [
  {
    id: 1,
    name: "",
    profile: "",
    createdAt: "2023. 12. 01 20:22:11",
    content: "배고프다 저녁 뭐 먹지",
    like: "1225",
    anonymous: true,
    code: "asdf314",
  },
  {
    id: 2,
    name: "스미스마스",
    profile: "/assets/image/town/default-profile.png",
    createdAt: "2023. 12. 01 20:22:11",
    content: "부자 되게 해주세요",
    like: "987",
    anonymous: false,
    code: "asdf314",
  },
  {
    id: 3,
    name: "산타",
    profile: "/assets/image/town/default-profile.png",
    createdAt: "2023. 12. 01 20:22:11",
    content: "누가 우냐",
    like: "779",
    anonymous: false,
    code: "asdf314",
  },
];
