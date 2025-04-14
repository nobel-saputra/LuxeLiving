import Navbar from "./components/pages/navbar";
import HomeSection from "./components/pages/home";
import Properties from "./components/pages/properties";
import Aboutus from "./components/pages/aboutus";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <Properties />
      <Aboutus />
    </>
  );
}
