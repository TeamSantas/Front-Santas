import PresentService from "../PresentService";

export async function setGetDayPresents(receiverId, day) {
  const config = {
    params: {
        receiverId: receiverId,
        day: day
    },
  };
  const res = await PresentService.getDayPresentsList(config);

  if (res.status === 200) return res.data.data;
}
