"use server";

import { getBoard, getMyBoard } from "../../api/hooks/useTownData";

export const fetchContents = async (page: number) => {
  const perPage = 12;
  try {
    // 최초 게시글 fetch
    const allContents = await getBoard(page * perPage);
    return allContents || [];
  } catch (e) {
    console.error("Error while fetching all contents: ", e);
    return null;
  }
};

export const fetchMyContents = async (page: number) => {
  const perPage = 12;
  try {
    // 최초 게시글 fetch
    const allContents = await getMyBoard(page * perPage);
    return allContents || [];
  } catch (e) {
    console.error("Error while fetching my contents: ", e);
    return null;
  }
};
