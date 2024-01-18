import Create from "./Sections/Create";
import Download from "./Sections/Download";
import Enjoy from "./Sections/Enjoy";
import FAQ from "./Sections/FAQ";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import Watch from "./Sections/Watch";

export default function App() {
  return (
    <section>
      <section>
        <Hero />
      </section>
      <section>
        <Enjoy />
      </section>
      <section>
        <Download />
      </section>
      <section>
        <Watch />
      </section>
      <section>
        <Create />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  )
}