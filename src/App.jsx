import styles from "./App.module.css";
// import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

// https://images.vexels.com/media/users/3/157621/isolated/preview/4e98cf3aacef00c2366ebee02f2ee6c2-telephone-call-icon-by-vexels.png
export default App;
