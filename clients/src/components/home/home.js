import styles from "./home.module.css";
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeText}>
        <p className={styles.txtOne}>
          Handcrafted
          <br /> & ethically sourced
        </p>
        <p className={styles.txtTwo}>
          A collection inspired by old-world charm, crafted<br/> with moisannites and
          diamonds.
        </p>
        <button className={styles.expBtn}>Explore</button>
      </div>
      <div className={styles.imgContainer}>
        <img
          src="https://auriane.jwsuperthemes.com/wp-content/uploads/2022/01/slider2a.jpg"
          alt="home img"
        />
      </div>
    </div>
  );
}
