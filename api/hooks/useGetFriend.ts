import FriendsService from "../FriendsService";

export async function useGetFriend() {
        const res = await FriendsService.getFriends();
        // console.log(res.data);
        return res.data;
}
