import styles from "./about.module.css";

function AboutUs() {
  return (
    <>
      <h1 className={styles.aboutHead}>About Us</h1>
      <div className={styles.aboutUs}>
        <section className={styles.story}>
          <h2>A Legacy of Elegance and Craftsmanship</h2>
          <p>
            Welcome to <strong>Sherief Jewellery</strong>, where timeless
            tradition meets modern artistry. Since our establishment in [Year],
            we have been committed to creating exquisite gold jewelry that
            reflects the beauty and individuality of every customer.
          </p>
        </section>

        <section className={styles.vision}>
          <h2>Our Vision</h2>
          <p className={styles.aboutTxt}>
            At Sherief Jewellery, our vision is to inspire confidence and
            celebrate life's cherished moments through exceptional craftsmanship
            and unparalleled quality. Every piece we create is a testament to
            our passion for artistry and attention to detail.
          </p>
        </section>

        <section className={styles.whyChooseUs}>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Exquisite Designs:</strong> Our collections blend
              traditional craftsmanship with contemporary elegance to offer
              jewelry that stands out.
            </li>
            <li>
              <strong>Uncompromised Quality:</strong> Using only the finest
              materials, we ensure every piece is as durable as it is beautiful.
            </li>
            <li>
              <strong>Customer-Centric Approach:</strong> Your satisfaction
              drives everything we do. From custom designs to personalized
              consultations, we prioritize your needs.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
