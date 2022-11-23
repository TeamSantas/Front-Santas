import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { usePostPresent } from "../../api/hooks/usePostPresent";
import { postPresentData } from "../../util/type";

const Container = styled.div`
  background-color: white;
`;
const ThumbnailWrapper = styled.div`
  width: 20rem;
`;
const Thumbnail = styled.div`
  width: 5rem !important;
`;

const ImageUpLoad = () => {
  const [files, setFiles] = useState();
  const [imageSrc, setImageSrc] = useState("");

  const onLoadFile = (e) => {
    const file = e.target.files;
    console.log("file >>> ", file);
    setFiles(file);
    encodeFileToBase64(e.target.files[0]);
  };

  const handleImageSubmit = () => {
    const presentData = new FormData();
    presentData.append("receiverId", "1");
    presentData.append("nickname", "suyeon");
    presentData.append("title", "Test title");
    presentData.append("contents", "Test contents");
    presentData.append("receivedDate", "2022-12-25");
    presentData.append("isAnonymous", "true");
    presentData.append("multipartFileList", files[0]); // TODO : 파일 여러개 등록 기능 추가 필요
    usePostPresent(presentData);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <Container>
      <ThumbnailWrapper>
        <strong>업로드된 이미지</strong>
        {imageSrc && (
          <img className="thumbnail" src={imageSrc} alt="preview-img" />
        )}
      </ThumbnailWrapper>
      <form>
        <input type="file" id="image" accept="img/*" onChange={onLoadFile} />
        {/* <label htmlFor="image">이미지 선택하기</label> */}
      </form>
      <button onClick={handleImageSubmit}>저장하기</button>
    </Container>
  );
};

export default ImageUpLoad;
