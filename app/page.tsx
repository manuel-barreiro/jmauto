import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CardsSection from "@/components/CardsSection";
import Footer from "@/components/Footer";
import WhoAreWe from "@/components/WhoAreWe";
import VisitUs from "@/components/VisitUs";
import ContactUs from "@/components/ContactUs";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <CardsSection />
      <WhoAreWe/>
      <VisitUs />
      <ContactForm />
      <ContactUs />
      <Footer />
    </>
  );
}
