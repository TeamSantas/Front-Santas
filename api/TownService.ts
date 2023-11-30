import { AuthAPIInstance, TownAuthInstance, TownInstance } from "./APIInstance";
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

  // 회원 게시글 조회 (서버 사이드)
  getAuthBoard = (params: { boardId: number }, token) => {
    const TownServerAuthInstance = AuthAPIInstance(
      process.env.NEXT_PUBLIC_BASE_URL,
      token
    );
    return TownServerAuthInstance.get<ResponseData<BoardData[]>>(`/api/board`, {
      params,
    });
  };

  // 나의 게시글 조회
  getMyBoard = (params: { boardId: number }) =>
    TownAuthInstance.get<ResponseData<BoardData[]>>(`/api/board/my`, {
      params,
    });

  // 나의 게시글 조회 (서버 사이드)
  getServerMyBoard = (params: { boardId: number }, token) => {
    const TownServerAuthInstance = AuthAPIInstance(
      process.env.NEXT_PUBLIC_BASE_URL,
      token
    );
    return TownServerAuthInstance.get<ResponseData<BoardData[]>>(
      `/api/board/my`,
      {
        params,
      }
    );
  };

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
  postBoardDelete = (params: { boardId: number }) =>
    TownAuthInstance.delete<ResponseData<string>>(`/api/board`, { params });

  // 인기 게시글 조회
  getBoardPopular = () =>
    TownInstance.get<ResponseData<BoardData[]>>(`/api/board/popular`);

  // 회원 인기 게시글 조회 (서버)
  getAuthBoardPopular = (token) => {
    const TownServerAuthInstance = AuthAPIInstance(
      process.env.NEXT_PUBLIC_BASE_URL,
      token
    );
    return TownServerAuthInstance.get<ResponseData<BoardData[]>>(
      `/api/board/popular`
    );
  };
}

export default new TownService();
