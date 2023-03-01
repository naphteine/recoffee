import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import CartIcon from "@/components/CartIcon";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kio Store</title>
        <meta name="description" content="Kio Coffee & Food" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Kio Store</h1>
        <button className={styles.cartButton}>
          <span className={styles.cartIcon}>
            <CartIcon />
          </span>
          <span>Your cart</span>
          <span className={styles.cartBadge}>3</span>
        </button>
      </header>

      <div className={styles.mainImage}>
        <Image
          src="/images/coffee.jpg"
          width={1080}
          height={1620}
          alt="Coffee"
        />
      </div>

      <footer>
        All rights reserved. &copy; 2022-2023.{" "}
        <a href="https://www.gokaygultekin.dev">GG</a>
      </footer>
    </>
  );
}
