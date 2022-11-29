import { useRouter } from "next/router";
import { useContext, useEffect, useMemo, useState } from "react";
import Home from ".";
import FriendsService from "../api/FriendsService";
import { storeContext } from "../store/Store";
import { dataProps } from "../util/type";

export default function OtherCalendar () {
  const router = useRouter();
  const { storeUserData } = useContext(storeContext);
  const [code, setCode] = useState('');
  const [userData, setUserData] = useState({});

  const handleInvitationCode = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.length == 37) {
        const tmp = window.location.pathname.split('/');
        setCode(tmp[1]);
        return tmp[1];
      };
    }
  }
  
  const getLinkMember = async (code) => {
    const res = await FriendsService.getFriend(code);
    // console.log(res, "링크멤버가져오기");
    if (res.status === 200){
      setUserData(res.data.data);
    }
    else{
      router.replace('/404')
    }
  }

  useEffect(() => {
    const link = handleInvitationCode();
    getLinkMember(link);
  }, []);

  
  return <Home data={userData} />;
}