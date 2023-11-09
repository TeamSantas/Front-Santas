import { StyledCard } from "../receivedPresents/Card";
import styled from "styled-components";
import TabCardImg from "./TabCardImg";

const TabCardForm = styled(StyledCard)`
  margin: 10px 5px;
  width: 30%;
  height: 30%;

  @media (max-width: 600px) {
    width: 32vw;
  }
  @media (max-width: 400px) {
    width: 70vw;
  }
`;

const TabCard = (props) => {
  return (
    <TabCardForm>
      <TabCardImg img={props.img} />
    </TabCardForm>
  );
};
export default TabCard;
