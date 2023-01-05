import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import requests from '../utils/requests';
import Props from '../types/Home/Props';

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  romanceMovies,
  documentaries,
}: Props) => {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-900/10  to-[#010511]">
      <Head>
        <title>Home - Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative px-8 py-4">
        <section>
          {/* Banner component of Netflix */}
          <Banner netflixOriginals={netflixOriginals} />
          {/* Modal for showing the trailer and more information about the playing show */}
        </section>

        <section>
          {/* Different Rows of the Netflix */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
      {/* Modal */}
      <footer>{/* For showing the footer of the app */}</footer>
    </div>
  );
};

export default Home;

/**
 * This function is used to fetch the data from the server side
 * @function {getServerSideProps} - The function to be used to fetch the data from the server side
 */

export const getServerSideProps = async () => {
  // Using the Promise.all() method to fetch all the data at once, if we use await for each request, then the page will load slowly, and we would hav eto use 8 await statements, which is not a good practice
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  // Returning the data to the Home component as props
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
