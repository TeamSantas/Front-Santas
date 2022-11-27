import styled from "styled-components";
import Image from "next/image";
import DescModal from "./DescModal";
import { useState } from "react";

export const Desc = () => {
  const [descModalShow, setDescModalShow] = useState(false);

  const handleDescsModalClose = () => {
    setDescModalShow(false);
  };

  console.log("descModalShow", descModalShow);

  return (
    <div onClick={() => setDescModalShow(true)}>
      <Image
        width={30}
        height={30}
        src="/assets/image/question_mark.svg"
        alt=""
      />
      <DescModal show={descModalShow} onHide={handleDescsModalClose} />
    </div>
  );
};
