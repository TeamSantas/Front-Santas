import FriendsService from "../FriendsService";

export async function useGetFriend() {
        const res = await FriendsService.getFriends();

        return res;
}
