import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import {Flex} from "../styles/styledComponentModule";
import Card from "./Card";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;

`
const presentsData = [
  {
    id : 0,
    thumbnail : "face",
    type : "svg"
  }, 
  {
    id : 1,
    thumbnail : "Calendar",
    type : "svg"
  }, 
  {
    id : 2,
    thumbnail : "santa",
    type : "png"
  }, 
  {
    id : 3,
    thumbnail : "face",
    type : "svg"
  }, 
]

const PresentCardList = (props) => {
    // TODO : 실제 받은 데이터로 map 돌리기
    return (
      <>
        <TabFlex>
          {presentsData?.map((present) => (
            <Card 
              key={present.id}
              id={present.id}
              thumbnail={present.thumbnail} 
              type={present.type}
            />
          ))}
        </TabFlex>
      </>
    );
}

export default PresentCardList;
