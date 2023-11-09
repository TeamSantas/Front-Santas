import styled from "styled-components";

const CardImg = styled.img`
  width: 100%;
  height: 25vh;
  object-fit:cover;
  @media (max-width: 600px) {
    height: 15vh;
}
`

const TabCardImg = (props) => {
    return <CardImg src={props.img}/>
}
export default TabCardImg
