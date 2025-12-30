import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/Navigation/Navbar";
import About from "./components/sections/About/About";
import Email from "./components/sections/Email/Email";
import Favorites from "./components/sections/My Favorites/Favorites";
import ShoppingLinks from "./components/sections/Shopping/ShoppingLinks";
import SocialLinks from "./components/sections/Social Media/SocialLinks";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <div className={styles.app}>
        <Navbar />

        <main className={styles.main}>
          <About id="about" />
          <SocialLinks id="social" />
          <ShoppingLinks id="shopping" />
          <Favorites id="favorites" />
          <Email id="email" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
