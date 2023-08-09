import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { Movie } from "../t";
import { baseUrl } from "../constants/movie";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

interface Props {
  netflixOriginals: Movie[];
  //   trendingNow: Movie[];
  //   topRated: Movie[];
  //   actionMovies: Movie[];
  //   comedyMovies: Movie[];
  //   horrorMovies: Movie[];
  //   romanceMovies: Movie[];
  //   documentaries: Movie[];
}

export default function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
          priority
          alt="Movie"
        ></Image>
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-s text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>

      <div className="flex space-x-3 mt-4">
        <button className="bannerBtn bg-white text-black">
          <FaPlay className="w-4 h-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button className="bannerBtn bg-[gray]/70">
          More Info
          <InformationCircleIcon className="w-5 h-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}
