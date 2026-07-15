import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
