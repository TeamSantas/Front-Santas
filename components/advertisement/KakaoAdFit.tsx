import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface IKakaoAdFit {
  id: string;
}

function KakaoAdFit({ id }: IKakaoAdFit) {
  const adRef = useRef<boolean>(false);
  const adContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (adRef.current || !adContainer.current) {
      return;
    }

    const ins = document.createElement("ins");
    const script = document.createElement("script");

    ins.className = "kakao_ad_area";
    ins.style.display = "none";
    ins.setAttribute("data-ad-width", "320");
    ins.setAttribute("data-ad-height", "50");
    ins.setAttribute("data-ad-unit", id);

    script.async = true;
    script.type = "text/javascript";
    script.src = "//t1.daumcdn.net/kas/static/ba.min.js";

    adContainer.current.appendChild(ins);
    adContainer.current.appendChild(script);

    adRef.current = true;
  }, []);

  return <AsideKakaoAdFit ref={adContainer} />;
}

export default React.memo(KakaoAdFit);

const AsideKakaoAdFit = styled.aside`
  overflow: hidden;
  height: 50px;
`;
