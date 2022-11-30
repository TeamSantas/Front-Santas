import PresentService from "../PresentService";

export async function setGetDayPresents(receiverId, day) {
  const config = {
    params: {
        receiverId: receiverId,
        day: day
    },
  };
  return await PresentService.getDayPresentsList(config);
}
