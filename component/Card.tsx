import styled from "styled-components";

const StyledCard = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.26);
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  height: 300px;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
`

const Card = (props) => {
    return <StyledCard>{props.children}</StyledCard>
}
export default Card;
