import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CardsSection from "@/components/CardsSection";
import Footer from "@/components/Footer";
import WhoAreWe from "@/components/WhoAreWe";
import VisitUs from "@/components/VisitUs";
import ContactUs from "@/components/ContactUs";
import CotizaTuVehiculo from "@/components/CotizaTuVehiculo";
import WhatsappButton from "@/components/WhatsappButton";
import { Toaster } from "@/components/ui/toaster"


export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <CardsSection />
      <WhoAreWe/>
      <VisitUs />
      <CotizaTuVehiculo />
      <ContactUs />
      <Footer />
      <WhatsappButton />
      <Toaster />
    </>
  );
}
