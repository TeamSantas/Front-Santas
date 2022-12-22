import {useRouter} from "next/router";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {getCookie} from "../businesslogics/cookie";
import {DefaultSeo} from "next-seo";
import {SeoNext} from "../component/common/SeoNext";
import { NextSeo } from 'next-seo';

const GoBtn = styled.button`
  background: #ac473d;
  border-radius: 12px;
  width: 312px;
  height: 72px;

  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #f0ede2;

  border: 0;
`;
const Div = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`
const Image = styled.img`
  display: block;
  width: 300px;
  margin: 0 auto 50px auto ;
  @media (max-width: 600px) {
    width: 230px;
    margin: 0 auto 25px auto ;
  }
`;
const StoryLink = styled.a`
  text-decoration: none;
  color: white;
  width: 312px;
  text-shadow: 0 0 5px #823e40;
  font-size: 20px;
  display: block;
  margin-top: 10px;
  background-color: rgba(130, 62, 64, 0.1);
  border-radius: 10px;
  padding: 2px 10px;
  margin: 10px auto;
  &:hover{  
    color : white;
    text-decoration: underline;
  }
`;
const Title = () => {
    const router = useRouter();
    const [visited, setVisited] = useState(false);

    useEffect(() => {
        const token = getCookie("token");
        if (token !== "") {
            //방문한 적이 있으면
            setVisited(true);
        }
    }, []);
    return (
            <Div>
                <DefaultSeo {...SeoNext}/>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://pitapat-adventcalendar.site/title',
                        title: '두근두근 어드벤트 캘린더🎁',
                        description: '크리스마스다! 두근두근 어드벤트 캘린더',
                        images: [
                            {
                                url: "https://pitapat-adventcalendar.site/assets/image/onboarding/maintitle.png",
                                width: 280,
                                height: 280,
                                alt: "Og Image Alt 1"
                            },
                            {
                                url: 'https://pitapat-adventcalendar.site/assets/image/character/face_heart.png',
                                width: 600,
                                height: 600,
                                alt: 'Og Image Alt 2',
                            },
                        ],
                    }}
                    twitter={{
                        handle: '@teamsantaz_official',
                        site: '@teamsantaz_official',
                        cardType: 'summary_large_image',
                    }}
                />
                <Image src="/assets/image/character/face_heart.png" />
                <Image src="/assets/image/onboarding/title.png" />
                {visited === true ? (
                    <GoBtn onClick={() => (router.push("/") )}>
                        내 캘린더로 가기
                    </GoBtn>
                ) : (
                    <GoBtn onClick={() => (router.push("/login")) }>내 캘린더 만들러가기</GoBtn>
                )}
                <StoryLink href={`https://pitapat-adventcalendar.site/onboarding`}>
                    👉 스토리 보러가기
                </StoryLink>
            </Div>
    );
}
export default Title
