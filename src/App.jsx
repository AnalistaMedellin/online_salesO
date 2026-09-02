import Header from "./components/Header";
import Hero from "./components/Hero";
import Discounts from "./components/Discounts";
import Benefits from "./components/Benefits";
import VipVideo from "./components/VipVideo";
import Testimonials from "./components/Testimonials";
import ChannelFeatures from "./components/ChannelFeatures";
import OperationProcess from "./components/OperationProcess";
import BrandLogos from "./components/BrandLogos";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import { ContactModalProvider } from "./context/ContactModalContext";

function App() {
  return (
    <ContactModalProvider>
      <Header />
      <Hero />
      <Discounts />
      <Benefits />
      <VipVideo />
      <Testimonials />
      <ChannelFeatures />
      <OperationProcess />
      <BrandLogos />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ContactModal />
    </ContactModalProvider>
  )
}
export default App
