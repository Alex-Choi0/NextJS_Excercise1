import Head from "next/head"
import Banner from "../components/banner"
import styles from "../styles/Home.module.css"

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("hi banner button")
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  )
}
