import { useState, useEffect } from 'react';
import Image from 'next/image';

import { BsFillPlayFill, BsInfoCircle } from 'react-icons/bs';

import { BASE_URL_IMAGE } from '../../utils/constants';
import Movie from '../../types/Movie';
import useModal from '../../hooks/useModal';

type Props = {
  netflixOriginals: Movie[];
};

const Banner = ({ netflixOriginals }: Props) => {
  const { openModal } = useModal();

  // Either the state can of the type Movie or null
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    /**
     * @function {setMovie} - Sets the state to the random movie from the Netflix Originals
     * @description {useEffect} - To get the random movie from the Netflix Originals, runs every time netflix originals changes
     */
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    movie && (
      <div className="flex flex-col  gap-y-2 pt-16 pb-8 lg:pt-40 lg:pb-20">
        {/* Container for the <Image /> */}
        <div className="absolute top-0 left-0 h-[95vh] -z-10 w-full">
          {/* When using the layout="fill", the parent should be "absolute" or "relative" */}
          <Image
            src={`${BASE_URL_IMAGE}${
              movie?.backdrop_path || movie?.poster_path
            }`}
            alt={movie?.title || 'default'}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>

        <h1 className="max-w-lg text-2xl font-bold md:text-3xl lg:text-5xl">
          {movie?.title}
        </h1>
        <p className="max-w-sm text-shadow md:max-w-lg lg:max-w-2xl text-xs sm:text-sm md:text-base">
          {movie?.overview}
        </p>

        <div className="flex gap-x-3">
          <button
            onClick={() => openModal(movie)}
            className="banner-buttons bg-white text-black"
          >
            <BsFillPlayFill className="banner-buttons-icon text-black" />
            Play
          </button>
          <button
            onClick={() => openModal(movie)}
            className="banner-buttons bg-[gray]/70"
          >
            {' '}
            <BsInfoCircle className="banner-buttons-icon text-white" />
            More info
          </button>
        </div>
      </div>
    )
  );
};

export default Banner;
