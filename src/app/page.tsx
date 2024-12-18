

import ContactSection from "./components/Contact";
import Destination from "./components/Destination";
import FeaturedSection from "./components/Featured";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero/>
      <FeaturedSection/>
      <Destination/>
      <ContactSection/>
    </div>
  );
}
