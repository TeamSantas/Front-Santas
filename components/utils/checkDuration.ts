import moment from "moment";

interface ICheckDuration {
  startDate?: string; // ex) "2023-09-27T10:00:00.000+09:00"
  endDate?: string; //     ㄴ> 23년 9월 27일 오전 10시(한국 시간 기준)
}

export const endingBannerStartDate = "2023-12-25T00:00:00.000+09:00";

export const checkDuration = ({ startDate, endDate }: ICheckDuration) => {
  return moment().isBetween(startDate, endDate);
};
