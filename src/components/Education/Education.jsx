import React from "react";

import styles from "./Education.module.css";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.ecducationItems}>
          <li className={styles.educationItem}>
            <div className={styles.aboutItemText}>
              <h3>SSC</h3>
              <p>Guru Nanak High School</p>
              {/* <p style={{ marginTop: "10px" }}>68.90%</p> */}
            </div>
          </li>
          <li className={styles.educationItem}>
            <div className={styles.aboutItemText}>
              <h3>HSC</h3>
              <p>M.H. Saboo Siddik College Of Engineering</p>
              {/* <p style={{ marginTop: "10px" }}>61.90%</p> */}
            </div>
          </li>
          <li className={styles.educationItem}>
            <div className={styles.aboutItemText}>
              <h3>Bsc Computer Science</h3>
              <p>Rizvi College of Arts Science and Commerce</p>
              <p style={{ marginTop: "10px" }}>8.4/10</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
