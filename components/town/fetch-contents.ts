"use server";

import {
  getAuthBoard,
  getBoard,
  getMyBoard,
} from "../../api/hooks/useTownData";

export const fetchContents = async (page: number, token = null) => {
  const perPage = 12;
  try {
    // 1page 이상부터 호출
    const allContents = token
      ? await getAuthBoard(page * perPage, token)
      : await getBoard(page * perPage);
    return allContents || [];
  } catch (e) {
    console.error("Error while fetching all contents: ", e);
    return null;
  }
};

export const fetchMyContents = async (page: number) => {
  const perPage = 12;
  try {
    // 1page 이상부터 호출
    const allContents = await getMyBoard(page * perPage);
    return allContents || [];
  } catch (e) {
    console.error("Error while fetching my contents: ", e);
    return null;
  }
};
