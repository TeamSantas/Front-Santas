import PresentService from "../PresentService";

export async function setGetDayPresents(receiverId, day) {
  const config = {
    params: {
        receiverId: receiverId,
        day: day
    },
  };
  try {
      const res = await PresentService.getDayPresentsList(config);
      return res.data.data;
  }catch (e){
    console.log(e)
    // TODO : router.push /login
  }
}
