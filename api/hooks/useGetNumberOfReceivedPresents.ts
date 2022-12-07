import PresentService from "../PresentService";

export async function setGetNumberOfReceivedPresents(receiverId) {
  const config = { 
    params: {
      receiverId: receiverId,
    },
  };
  return await PresentService.getNumberOfReceivedPresents(config);
}
