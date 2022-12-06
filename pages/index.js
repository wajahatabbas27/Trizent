import Head from "next/head";
import Business from "../components/Business";
import MainScreen from "../components/MainScreen";
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trizent </title>
      </Head>

      <main>
        <MainScreen />
        <Services />
        <Business />
      </main>
    </div>
  );
}
