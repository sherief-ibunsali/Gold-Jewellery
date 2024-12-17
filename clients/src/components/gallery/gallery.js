import styles from "./gallery.module.css";

// Array of images
const images = [
  {
    id: 1,
    src: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/e1_v2.jpg",
  },
  { id: 2, src: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/e2.png" },
  { id: 3, src: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/e3.png" },
  { id: 4, src: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/e11.png" },
  { id: 5, src: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/e5.png" },
  { id: 6, src: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/e6.png" },
  { id: 7, src: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/e7.png" },
  {
    id: 8,
    src: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/e8_v2.jpg",
  },
  { id: 9, src: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/e9.png" },
  { id: 10, src: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/e10.png" },
];

export default function Gallery() {
  return (
    <>
      <h1 className={styles.galleryHead}>Gallery</h1>
      <p className={styles.galleryTxt}>Leading the journey of a new life in their own unique way</p>
      <div className={styles.galleryContainer}>
        {/* Big Image Section */}
        <div className={styles.bigContainer}>
          <img src={images[0].src} alt={`Big Highlight ${images[0].id}`} />
        </div>

        {/* Small Images Section */}
        <div className={styles.smallContainer}>
          {images.slice(1, 5).map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={`Small Highlight ${image.id}`}
            />
          ))}
        </div>
      </div>

      <SecondGallery />
    </>
  );
}

function SecondGallery() {
  return (
    <div className={styles.galleryContainer}>
      {/* Small Images Section */}
      <div className={styles.smallContainer}>
        {images.slice(5, 9).map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Small Highlight ${image.id}`}
          />
        ))}
      </div>

      {/* Big Image Section */}
      <div className={styles.bigContainer}>
        <img src={images[9].src} alt={`Big Highlight ${images[9].id}`} />
      </div>
    </div>
  );
}
