import styles from "./About.module.css";

export function About() {
  return (
    <div className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <p>
        I am Albar Khan, a passionate Web Developer with a drive for creativity,
        innovation, and problem-solving. This website serves as a showcase of my
        skills, projects, and achievements, providing you with a glimpse into my
        journey and what I have to offer.
      </p>
      <p style={{ marginTop: "20px" }}>
        {" "}
        Thank you for visiting my portfolio website, and I hope you enjoy
        exploring my work!
      </p>
    </div>
  );
}
