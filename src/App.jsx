import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import Tech from "./sections/Tech";
import AboutMe from "./sections/AboutMe";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <AboutMe />
    <ShowcaseSection />
    <Tech />
    <FeatureCards />
    <Contact />
    <Footer />
  </>
);

export default App;
