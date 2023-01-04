import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import requests from '../utils/requests';

export default function Home() {
  return (
    <div className="relative px-8 py-4 mt-16 h-screen bg-gradient-to-b from-gray-900/10  to-[#010511]">
      <Head>
        <title>Home - Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Lets build Netflix Clone
      <main>
        <section>
          {/* Banner component of Netflix */}
          <Banner />
          {/* Modal for showing the trailer and more information about the playing show */}
        </section>

        <section>
          {/* Different Rows of the Netflix */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>

        <footer>{/* For showing the footer of the app */}</footer>
      </main>
    </div>
  );
}
