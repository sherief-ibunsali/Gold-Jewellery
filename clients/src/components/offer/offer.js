import React, { useEffect, useState } from "react";
import styles from "./offer.module.css";

export default function Offer() {
  const [offerData, setOfferData] = useState([]);
  useEffect(function () {
    async function getOfferData() {
      try {
        const response = await fetch(
          "http://localhost:4000/api/jewellery/gold"
        );
        if (!response.ok) throw new Error("Something went wrong");
        const data = await response.json();
        setOfferData(data.data.gold);
      } catch (err) {
        console.log(`Could not find your data ${err.message}`);
      }
    }
    getOfferData();
  }, []);
  console.log(offerData);
  return (
    <>
      <h1 className={styles.offerHead}>Top Sellers</h1>
      <p className={styles.offerHeadPara}>Explore our most loved products</p>
      <div className={styles.offerContainer}>
        {offerData.map((gold, i) => (
          <GoldDetails gold={gold} key={i} />
        ))}
      </div>
    </>
  );
}

function GoldDetails({ gold }) {
  return (
    <div className={styles.offerCard}>
      <img src={gold.image} alt="Gold Jewelry" className={styles.cardImage} />
      <h3 className={styles.goldName}>{gold.name}</h3>
      <p className={styles.goldType}>{gold.type}</p>
      <p className={styles.price}>
        <span className={styles.oldPrice}>₹2000</span> ₹{gold.price}
      </p>
    </div>
  );
}
