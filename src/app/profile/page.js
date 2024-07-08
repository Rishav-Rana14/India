import styles from "../styles/Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.container}>
       
      <div className={styles.backgroundImage}/>

      <main className={styles.main}>
        <h1 className={styles.tricolorText}>Hello World Champions</h1>
      </main>

      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/vv.mp4" type="video/mp4" />
      </video>

    </div>
  );
}
