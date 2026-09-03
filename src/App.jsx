import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureStrip from "./components/FeatureStrip";
import Discounts from "./components/Discounts";
import Benefits from "./components/Benefits";
import CompanyVideo from "./components/CompanyVideo";
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
      <FeatureStrip />
      <Discounts />
      <Benefits />
      <CompanyVideo />
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
