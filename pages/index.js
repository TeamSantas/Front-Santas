import styles from '../styles/Home.module.css'
import Seo from "../component/common/Seo";

export default function Home() {
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
          </main>
    </div>
  )
}
