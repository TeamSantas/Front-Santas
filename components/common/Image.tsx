import styled from "styled-components";
import NextImage from "next/image";

const ImageContainer = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
`;
const StyledImage = styled(NextImage)`
  position: absolute;
`;

export const SquareImage = (props) => {
  return (
    <ImageContainer>
      <StyledImage {...props} fill />
    </ImageContainer>
  );
};
