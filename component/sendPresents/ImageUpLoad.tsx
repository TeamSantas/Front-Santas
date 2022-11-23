import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { usePostPresent } from "../../api/hooks/usePostPresent";

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
  const [files, setFiles] = useState<FileList>();
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | any>();

  const onLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const fileList = target.files as FileList;
    setFiles(fileList);
    encodeFileToBase64(fileList[0]);
  };

  const HandleImageSubmit = () => {
    const presentData = new FormData();
    presentData.append("receiverId", "1");
    presentData.append("nickname", "suyeon");
    presentData.append("title", "Test title");
    presentData.append("contents", "Test contents");
    presentData.append("receivedDate", "2022-12-25");
    presentData.append("isAnonymous", "true");
    if (files.length > 0) {
      presentData.append("multipartFileList", files[0]); // TODO : 파일 여러개 등록 기능 추가 필요
    }

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
          <Image src={imageSrc} alt="preview-img" width={100} height={100} />
        )}
      </ThumbnailWrapper>
      <form>
        <input type="file" id="image" accept="img/*" onChange={onLoadFile} />
      </form>
      <button onClick={HandleImageSubmit}>저장하기</button>
    </Container>
  );
};

export default ImageUpLoad;
