import Draggable from "react-draggable";
import styled from "styled-components";
import {Flex} from "../../styles/styledComponentModule";
import {useState} from "react";

const Image= styled.img`
  width: auto;
  height: 80px;
  border-radius: 10px;
  margin: 0 auto;
  display: block;
`
const Post = styled.div`
  background-color: rgba(255,255,255,.7);
  width: auto;
  max-width: 250px;
  border-radius: 10px;
  text-align: left;
  padding: 5px;
  margin-bottom: 3px;
  border: dashed 2px dimgray;
  color : black;
  &:hover{
    transition: .2s;
    transform: scale(1.5);
    background-color: white;
  }
  &:active{
    transition: .2s;
    transform: scale(1.5);
    background-color: white;
  }
`
const Upside = styled(Flex)`
  text-align: right;
  padding-right: 10px;
`
const Button = styled.div`
  cursor: pointer;
  font-size: 20px;
`
const Text = styled.p`
  display: inline
`

const Box = (props) => {
    const [show, setShow] = useState(true);
    const showHandler = () => setShow(false);
    // function rand(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    return (
        // <Draggable defaultPosition = {{ x : rand(0,700), y : -1*props.size }}>
        <>
          {show ? <Post>
            <Upside>
              <div>from.{props.sender}</div>
              <Button onClick={showHandler}> X</Button>
            </Upside>
            {props.img !== "default" ? <Image src={props.img}/>: null}
            <Text>
              {props.content
              }
            </Text>
          </Post>: null}

        </>

        // </Draggable>
    )
}
export default Box
