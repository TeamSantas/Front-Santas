import FriendsService from "../FriendsService";
import {AxiosError} from "axios";

export async function useGetFriend() {
        const res = await FriendsService.getFriends();
        console.log(res.data);
        return res.data;
}
