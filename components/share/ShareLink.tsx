import Image from "next/image";
import {useEffect, useState} from "react";
import styled from "styled-components";
import CopyModal from "../index/CopyModal";
import {useAuthContext} from "../../store/contexts/components/hooks";

export const ShareLink = () => {
    const [copyModal, setCopyModal] = useState<boolean>(false);
    const [myLink, setMyLink] = useState<string>("");

    const clickCopyIconHandler = () => setCopyModal(true);
    const handleCopyModalClose = () => setCopyModal(false);

    //현재 로그인 된 유저의 초대링크 가져오기
    const userData = useAuthContext();
    useEffect(() => {
        const invitationLink = userData.storeUserData.invitationLink;
        setMyLink(invitationLink);
    }, [userData]);

    const linkCopyHandler = async () => {
        const copyURL = `https://merry-christmas.site/${myLink}`;
        console.log(copyURL);
        try {
            await navigator.clipboard.writeText(copyURL);
            setCopyModal(true);
        } catch (e) {
            alert("내 초대링크를 복사해 보내보세요! 바로 복사를 원하신다면~? 크롬브라우저로 접속해보세요✨");
            clickCopyIconHandler();
        }
    };
    return (
        <>
            <ShareBtn
                src={`/asset_ver2/image/btn/link_btn.png`}
                width={44}
                height={44}
                alt={"링크복사버튼"}
                onClick={linkCopyHandler}/>
            <CopyModal
                link={`https://merry-christmas.site/${myLink}`}
                show={copyModal}
                onHide={handleCopyModalClose}
            />
        </>

    );
};

const ShareBtn = styled(Image)`
  position: absolute;
  right: 10px;
  bottom: 70px;
  z-index: 100;
`;