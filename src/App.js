import { useRef } from "react";
import Cards from "./components/Cards";
import FeaturedPosts from "./components/FeaturedPosts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Testimonials from "./components/Testimoniols";
import AboutUs from "./components/AboutUs";

export default function App() {
  const homeRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const subscribeRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col w-screen max-w-[1440px] ">
        <Header
          scrollToSection={scrollToSection}
          homeRef={homeRef}
          blogRef={blogRef}
          contactRef={contactRef}
          aboutRef={aboutRef}
          subscribeRef={subscribeRef}
        />
        <div ref={homeRef}>
          <Hero />
        </div>
        <div className="flex flex-col gap-y-10 px-5 lg:px-10">
          <div ref={blogRef}>
            <FeaturedPosts />
          </div>
          <div ref={aboutRef}>
            <Info />
          </div>
          <div>
            <AboutUs />
          </div>
          <div>
            <Cards />
          </div>
          <div ref={contactRef}>
            <Testimonials />
          </div>
        </div>
        <div ref={subscribeRef}>
          <Footer
            scrollToSection={scrollToSection}
            homeRef={homeRef}
            blogRef={blogRef}
            contactRef={contactRef}
            aboutRef={aboutRef}
          />
        </div>
      </div>
    </div>
  );
}
