import { TownAuthInstance, TownInstance } from "./APIInstance";
import { ResponseData, BoardData, BoardForm, ReportData } from "../util/type";

class TownService {
  // 게시글 좋아요
  putBoardLikeAndUnlike = (params: { boardId: number }) =>
    TownAuthInstance.put<ResponseData<string>>(`/api/board/like`, null, {
      params,
    });

  // 게시글 조회
  getBoard = (params: { boardId: number }) =>
    TownInstance.get<ResponseData<BoardData[]>>(`/api/board`, {
      params,
    });

  // 나의 게시글 조회
  getMyBoard = (params: { boardId: number }) =>
    TownAuthInstance.get<ResponseData<BoardData[]>>(`/api/board/my`, {
      params,
    });

  // 게시글 작성
  postBoard = (formData: BoardForm) =>
    TownAuthInstance.post<ResponseData<string>>(`/api/board`, formData);

  // 게시글 신고
  postBoardReport = (ReportData: ReportData) =>
    TownAuthInstance.post<ResponseData<string>>(
      `/api/board/report`,
      ReportData
    );

  // 게시글 삭제
  postBoardDelete = () =>
    TownAuthInstance.delete<ResponseData<string>>(`/api/board`);

  // 인기 게시글 조회
  getBoardPopular = () =>
    TownInstance.get<ResponseData<BoardData[]>>(`/api/board/popular`);
}

export default new TownService();
