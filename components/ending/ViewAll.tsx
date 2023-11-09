import Draggable from "react-draggable";
import {useEffect, useState} from "react";
import styled from "styled-components";
import Box from "./Box";
import PresentService from "../../api/PresentService";
import {Flex} from "../../styles/styledComponentModule";

const Container = styled.div`
  background: transparent;
  width: 99%;
  margin: 0 auto;
`
const ViewFlex = styled(Flex)`
  flex-wrap: wrap;
  flex-grow : 2;
`
const Text = styled.h2`
  color: white;
`
const ViewAll = () => {
    const [receivedPresentList, setReceivedPresentList] = useState([]);
    useEffect(() => {
        const initReceivedPresentList = async () => {
            try {
                const res = await PresentService.getLoggedUserPresentList();
                let list = res.data.data.content;
                setReceivedPresentList(list.sort(function(a, b)  {
                    if(a.contents.length > b.contents.length)
                        return 1;
                    else if(a.contents.length < b.contents.length)
                        return -1;
                    else
                        return 0;
                }));
            }catch (e){
                console.log(e)
            }
        };
        initReceivedPresentList();
    }, []);
    return (
        <Container>
            <ViewFlex>
            {receivedPresentList.length > 0 ? receivedPresentList.map((present, i,) => (
                <Box content={present.contents} sender={present.nickname} img={present.imageURL} key={i}/>
                )
            ) : <Text>선물이 없습니다! 홈으로 가서 로그인을 해주세요 :)</Text>
            }
            </ViewFlex>
        </Container>
    )
}
export default ViewAll
