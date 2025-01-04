import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServicesPortfolio from "./components/Service";
import BookingSystem from "./components/Booking";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/Contact";

export default function App() {
  return (
    <div className="inter-font ">
      <Header />
      <Hero />
      <ServicesPortfolio />
      <BookingSystem />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
