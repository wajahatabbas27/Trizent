import Head from "next/head";
import Business from "../components/Business";
import Contact from "../components/Contact";
import MainScreen from "../components/MainScreen";
import Services from "../components/Services";
import Footer from "../components/Footer";
import SlickServices from "../components/SlickServices";
import Team from "../components/Team";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trizent </title>
      </Head>

      <main>
        <MainScreen />
        <Services />
        {/* <SlickServices/> */}
        <Team />
        <Business />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
