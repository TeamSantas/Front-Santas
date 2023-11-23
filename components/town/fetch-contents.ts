"use server";

import { getBoard } from "../../api/hooks/useTownData";

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
