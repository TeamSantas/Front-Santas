import styled from "styled-components";
import { useRef, useState } from "react";
import { GreenButton } from "../../styles/styledComponentModule";
import Image from "next/image";
import { usePostPresent } from "../../api/hooks/usePostPresent";
import Form from "react-bootstrap/Form";

const Container = styled.div`
  // background-color: white;
  height: 5rem;
  display: flex;
`;

const ThumbnailWrapper = styled.div`
  width: 20rem;
`;

const ImageFormWrapper = styled.div`
  display: flex;
`;

const SendPresentsWrapper = styled.div`
  text-align: center;
  color: white;
  background-image: url("/assets/image/message-background.svg");
  background-repeat: no-repeat;
  background-position: center;
`;

const SendPresents = (props) => {
  const [contents, setContents] = useState<string>("");
  const [isAnonymous, setAnonymous] = useState<boolean | any>(false);
  const ref = useRef(null);

  // ImageUpload -------------
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
    presentData.append("contents", contents);
    presentData.append("receivedDate", "2022-12-25");
    presentData.append("isAnonymous", isAnonymous);

    // TODO : 파일 여러개 등록 기능 추가 필요
    if (files) {
      presentData.append("multipartFileList", files[0]);
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
  // -------------------------------------

  // 익명 체크
  const handleCheckAnonymous = ({ target }) => {
    setAnonymous(!isAnonymous);
  };

  // 선물 보내기 버튼 handler ----------------
  const handleClickSendPresent = (e) => {
    setContents(ref.current.value);
    HandleImageSubmit();
  };

  console.log("익명? ", isAnonymous);
  return (
    <SendPresentsWrapper>
      <h2>
        수연 님에게 <br /> 쪽지를 보내보세요
      </h2>
      {/* TODO : <TextArea /> 컴포넌트 분리 */}
      <textarea
        className="textarea"
        ref={ref}
        id="message"
        name="message"
        placeholder="쪽지 써보슈"
      />

      <Form.Check
        inline
        type="checkbox"
        id={`default-checkbox`}
        label={`익명`}
        onClick={handleCheckAnonymous}
      />

      {/* TODO : <ImageUpLoad/> 컴포넌트 분리 */}
      <Container>
        <ThumbnailWrapper>
          <strong>업로드된 이미지</strong>
          {imageSrc && (
            <Image src={imageSrc} alt="preview-img" width={100} height={100} />
          )}
        </ThumbnailWrapper>
        <ImageFormWrapper>
          <form>
            <input
              type="file"
              id="image"
              accept="img/*"
              onChange={onLoadFile}
            />
          </form>
        </ImageFormWrapper>
      </Container>
      <GreenButton onClick={handleClickSendPresent}>쪽지보내기</GreenButton>
    </SendPresentsWrapper>
  );
};

export default SendPresents;
