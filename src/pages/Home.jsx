import Hero from "../components/Hero";
import Proud from "../components/Proud";
import Banner from "../components/Banner";
import TrendingSlider from "../components/TrendingSlider";
import News from "../components/News";
import Footer from "../components/Footer";

import img1 from "../img/banner/banner1.jpg";
import img2 from "../img/banner/banner2.jpg";

function Home() {
  return (
    <>
      <Hero />
      <Proud />
      <Banner
        header="Creative harmonious living"
        desc="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        btn="Shop Now"
        img={img1}
      />
      <TrendingSlider />
      <Banner
        header="Comfortable & Elegante Living"
        desc="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        btn="Shop Now"
        img={img2}
        layout="reverse"
      />
      <News />
      <Footer />
    </>
  );
}

export default Home;
