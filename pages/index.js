import Head from "next/head";
import Business from "../components/Business";
import MainScreen from "../components/MainScreen";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trizent </title>
      </Head>

      <main>
        <MainScreen />
        <Business />
      </main>
    </div>
  );
}
