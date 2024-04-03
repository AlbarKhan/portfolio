import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Albar khan</h1>
        <p className={styles.description}>
          {/* I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more! */}
          I built accessible, inclusive products and digital experiences for the
          web
        </p>
        <a href="mailto:albarkhan60@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="assets/hero/updated.png"
        alt="HeroImage"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
