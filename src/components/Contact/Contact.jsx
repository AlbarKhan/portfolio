import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"assets/contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:albarkhan60@gmail.com">albarkhan60@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={"assets/contact/linkedinIcon.png"} alt="LinkedIn icon" />
          <a
            href="https://www.linkedin.com/in/albar-khan-97271724a/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/AlbarKhan
          </a>
        </li>
        <li className={styles.link}>
          <img src={"assets/contact/githubIcon.png"} alt="Github icon" />
          <a
            href="https://www.github.com/AlbarKhan"
            target="_blank"
            rel="noreferrer"
          >
            github.com/AlbarKhan
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={
              "https://www.pngkey.com/png/full/264-2648358_telefono-phone-call-png-white.png"
            }
            height={"45px"}
            alt="Github icon"
          />
          <a href="tel:9653475357" target="_blank" rel="noreferrer">
            9653475357
          </a>
        </li>
      </ul>
    </footer>
  );
};
