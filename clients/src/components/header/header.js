import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>SHERIEF</h2>
        <p>JWELLERY</p>
      </div>
      <nav className={styles.navigation}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`${styles['nav-links']} ${isMobileMenuOpen ? styles.mobile : ''}`}>
          <li>Home</li>
          <li>Category</li>
          <li>About Us</li>
          <li>Offers</li>
          <li>Gallery</li>
        </ul>
      </nav>
    </header>
  );
}
