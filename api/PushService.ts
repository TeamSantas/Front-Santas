import { PushInstance } from "./APIInstance";

class PushService {
    postPushAlarm = (receiver: number, content: string) => {
        return PushInstance.post(
            `/api/alarm/push`,
            null,
            {
                params : { receivedUserId: receiver, content: content }
            }
        );
    }
}

export default new PushService();