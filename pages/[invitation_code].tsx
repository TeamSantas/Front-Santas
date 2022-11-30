import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Home from ".";
import FriendsService from "../api/FriendsService";

export default function OtherCalendar () {
  const router = useRouter();
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
  
  const getLinkMember = async (code: string) => {
    console.log(code, "코드에용");
    const res = await FriendsService.getFriend(code);
    // console.log(res, "링크멤버가져오기");
    if (res.status === 200){
      setUserData(userData);
    }
    else{
      router.replace('/404')
    }
  }

  useEffect(() => {
    const link = handleInvitationCode();
    getLinkMember(link);
  }, []);

  
  return <Home data={userData} link={code}/>;
}