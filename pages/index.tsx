import styles from '../styles/Home.module.css'
import Seo from "../component/common/Seo";
import styled from "styled-components";
import {NextPage} from "next";
import {useRouter} from "next/router";
import html2canvas from 'html2canvas';
import {useGetAllPosts} from "../api/hooks/useGetAllPosts";

//styled components 작동되나 확인용 임시코드
//추후 index.js에서 제거할 예정
const Button = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 30px;
  border: none;
  background-color: brown;
  color: white;
  font-size: 20px;
`;

const SantaImage = styled.img`
  width: 250px;
`;


const Home: NextPage = () => {
  const router = useRouter();
  const screenCaptureHandler = () => {
    console.log("캡쳐됨");
    html2canvas(document.getElementById('home')).then(function(canvas) {
      const url = canvas.toDataURL("my_calendar/png");
      onDownloadAs(url,'my_calendar.png');
    });
  }

  const onDownloadAs = (uri: string, filename: string) => {
    console.log("다운됨");
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className={styles.container} id="home">
        <Seo title='Home'/>
          <main className={styles.main}>
            <h3 className={styles.title}>
              <a href="https://nextjs.org">두근두근</a><br/>어드벤트 캘린더
            </h3>
            <p className={styles.description}>
              <b>🎅팀 산타즈🎄️</b>
            </p>
            <Button onClick={() => router.push('mypage')}>마이페이지가기</Button>
            <Button onClick={useGetAllPosts}>API연결테스트</Button>
            <SantaImage alt="santa" src="/asset/image/santa.png"/>
            <Button onClick={screenCaptureHandler}>화면캡쳐하기</Button>
          </main>
    </div>
  )
}

export default Home;
