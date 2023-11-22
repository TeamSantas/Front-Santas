import { BoardForm, ReportData } from "../../util/type";
import TownService from "../TownService";

/**
 * 게시글 좋아요
 */
export async function putBoardLikeAndUnlike(boardId) {
  const config = { boardId };
  try {
    const res = await TownService.putBoardLikeAndUnlike(config);
    return res.data.status === 200;
  } catch (e) {
    console.log(e);
    return false;
  }
}

/**
 * 게시글 조회
 */
export async function getBoard(boardId) {
  const config = { boardId };
  try {
    const res = await TownService.getBoard(config);
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
}

/**
 * 게시글 작성
 */
export async function postBoard(formData: BoardForm) {
  try {
    const res = await TownService.postBoard(formData);
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
}

/**
 * 인기 게시글 조회
 */
export async function getBoardPopular() {
  try {
    const res = await TownService.getBoardPopular();
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
}

/**
 * 게시글 신고
 */
export async function report(reportForm: ReportData) {
  try {
    const res = await TownService.postBoardReport({ reportInfo: reportForm });
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
}
