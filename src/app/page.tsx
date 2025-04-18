import Navbar from "./components/pages/navbar";
import HomeSection from "./components/pages/home";
import Properties from "./components/pages/properties";
import AboutUs from "./components/pages/aboutus";
import Selingan from "./components/pages/selingan";
import OurTeam from "./components/pages/ourTeam";
import ContactUs from "./components/pages/contactUs";
import Footer from "./components/pages/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <Properties />
      <AboutUs />
      <Selingan />
      <OurTeam />
      <ContactUs />
      <Footer />
    </>
  );
}
