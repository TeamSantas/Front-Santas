"use server";

import {
  getAuthBoard,
  getBoard,
  getMyBoard,
} from "../../api/hooks/useTownData";

export const fetchContents = async (page: number, token = null) => {
  try {
    // 1page 이상부터 호출
    // page = 마지막으로 조회한 boardId
    const allContents = token
      ? await getAuthBoard(page, token)
      : await getBoard(page);
    return allContents || [];
  } catch (e) {
    console.error("Error while fetching all contents: ", e);
    return null;
  }
};

export const fetchMyContents = async (page: number) => {
  try {
    // 1page 이상부터 호출
    // page = 마지막으로 조회한 boardId
    const allContents = await getMyBoard(page);
    return allContents || [];
  } catch (e) {
    console.error("Error while fetching my contents: ", e);
    return null;
  }
};
