import styled from "styled-components";
import { useState } from "react";
import { GreenCloseButton } from "../friends/FriendsModal";
import { Flex } from "../../styles/styledComponentModule";

const MultipleImgUploader = () => {
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };
  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };
  return (
    <div className="Thumbnail_Wrapper">
      <label
        id="present_img"
        htmlFor="file"
        onChange={handleAddImages}
      >
        <div className="addButton"></div>
        <input id="file" type="file" multiple />
      </label>
      <Flex>
        {showImages.map((image, id) => (
          <div className="imageContainer" key={id}>
            <img id="present_img" src={image} alt={`${image}-${id}`} onClick={() => handleDeleteImage(id)}/>
          </div>
        ))}
      </Flex>
    </div>
  );
};

export default MultipleImgUploader;
