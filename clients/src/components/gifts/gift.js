import styles from "./gift.module.css";

export default function Gift() {
  return (
    <>
      <h1 className={styles.giftHead}>Gifting & More</h1>
      <p className={styles.giftTxt}>Gifts that mark a moment</p>
      <div className={styles.giftContainer}>
        {/* Right Section */}
        <div className={styles.right}>
          <div className={styles.primary}>
            <div className={styles.primaryOne}>
              <img
                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/Birthday.jpg"
                alt="Gift 1"
              />
            </div>
            <div className={styles.primaryTwo}>
              <img
                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/anniversary.jpg"
                alt="Gift 2"
              />
            </div>
          </div>
          <div className={styles.primary}>
            <div className={styles.primaryOne}>
              <img
                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/baby-birth.jpg"
                alt="Gift 3"
              />
            </div>
            <div className={styles.primaryTwo}>
              <img
                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/festive.jpg"
                alt="Gift 4"
              />
            </div>
          </div>
        </div>

        {/* Left Section */}
        <div className={styles.left}>
          <div className={styles.leftOne}>
            <img
              src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/Personalized.jpg"
              alt="Gift 5"
            />
          </div>
          <div className={styles.leftTwo}>
            <img
              src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/Customized.jpg"
              alt="Gift 6"
            />
          </div>
        </div>
      </div>
    </>
  );
}
