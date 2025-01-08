
import Contact from "./Contact";
import Develop from "./Develop";
import Header from "./Header";
import Latest from "./Latest";
import News from "./News";
import People from "./People";
import Pricing from "./Pricing";
import Services from "./Services";
import Team from "./Team";
import Footer from "./Footer";
import Slider from "./Slider";


export default function HomeScreen() {
  return (
    <>
      <section className="relative ">
        <Header />
        <section className="px-20 flex flex-col gap-16">
          <Slider/>
          <Services />
          <Develop />
          <Team />
          <People />
          <Pricing />
          <Latest />
          <News />
          <Contact />
          <Footer />
        </section>
      </section>
    </>
  );
}
