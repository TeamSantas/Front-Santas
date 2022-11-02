import styles from '../styles/Home.module.css'
import Seo from "../component/common/Seo";
import styled from "styled-components";
import {NextPage} from "next";
import {useRouter} from "next/router";

//styled components 작동되나 확인용 임시코드
//추후 index.js에서 제거할 예정
const Button = styled.button`
  width: 300px;
  height: 50px;
  background-color: #0070f3;
  color: white;
  font-size: 20px;
`;


const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
        <Seo title='Home'/>
          <main className={styles.main}>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">산타즈!</a>
            </h1>
            <p className={styles.description}>
              지금부터 프론트엔드 개복수술 들어갑니다
            </p>
            <Button onClick={() => router.push('mypage')}>마이페이지가기</Button>
          </main>
    </div>
  )
}

export default Home;
