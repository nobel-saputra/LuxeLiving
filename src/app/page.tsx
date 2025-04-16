import Navbar from "./components/pages/navbar";
import HomeSection from "./components/pages/home";
import Properties from "./components/pages/properties";
import AboUtus from "./components/pages/aboutUs";
import Selingan from "./components/pages/selingan";
import OurtTeam from "./components/pages/ourTeam";
import ContactUs from "./components/pages/contactUs";
import Footer from "./components/pages/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <Properties />
      <AboUtus />
      <Selingan />
      <OurtTeam />
      <ContactUs />
      <Footer />
    </>
  );
}
