import styles from "./category.module.css";
import { useEffect, useState } from "react";

export default function Category() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    async function getCategory() {
      try {
        const response = await fetch(
          "http://localhost:4000/api/jewellery/category"
        );
        if (!response.ok) throw new Error(`Something went wrong`);
        const data = await response.json();
        setCategoryData(data.data.category);
      } catch (err) {
        console.log(`Could not find your ${err.message}`);
      }
    }
    getCategory();
  }, []);

  return (
    <>
      <div className={styles.categoryTxt}>
        <h4>Shop By Collections</h4>
        <p className={styles.centerTxt}>
          Whatever the occasion, we've got a beautiful piece of jewellery for
          you.
        </p>
      </div>
      <div className={styles.categoryContainer}>
        {categoryData.map((data, index) => (
          <div key={index} className={styles.card}>
            <img
              src={data.image}
              alt={data.name}
              className={styles.cardImage}
            />
            <p className={styles.cardName}>{data.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
