import styled from "styled-components";
import NextImage from "next/image";

const ImageContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-bottom: 100%;
  position: relative;
`;
const StyledImage = styled(NextImage)`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
`;

export const Image = (props) => {
  return (
    <ImageContainer>
      <StyledImage {...props} />
    </ImageContainer>
  );
};
