import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
//Helpers
import { getDetails, getCredits } from "../../API";
import { getSafePosterUrl } from "../../utils/images";
import { MEDIUM_POSTER } from "../../utils/consts";
//Styles
import { MovieTopDetails, MovieMainCrew, MovieHeader } from "./Movie.styles";
import { Photo, Container } from "../../styles/Styles.common";
//Components
import PeopleGroup from "./PeopleGroup";
const ResultsCard = React.lazy(() => import("./../Card"));

const Movie = (props) => {
  const { id, mediatype } = props;
  const [details, setDetails] = useState(null);
  const [crew, setCrew] = useState(null);
  const [directors, setDirectors] = useState(null);
  const [writers, setWriters] = useState(null);
  const [stars, setStars] = useState(null);

  const getMovieData = async (id) => {
    const _details = await getDetails(id, mediatype);
    const _crew = await getCredits(id, mediatype);

    setDetails(_details);
    setCrew(_crew);

    //Get directors and writers -> here is better to use filter instead of find as filters deliver an array.
    //Get the director/s
    const directors = _crew?.crew?.filter((item) => {
      return item.job === "Director" || item.job === "Directing";
    });
    setDirectors(directors);

    //Get the writer/s
    let writers = _crew?.crew?.filter((item) => {
      return (
        item.job === "Screenplay" ||
        item.job === "Writer" ||
        item.job === "Writing"
      );
    });
    setWriters(writers);

    //Get the stars/s
    setStars(_crew?.cast);
  };

  useEffect(() => {
    if (id) {
      getMovieData(id);
    }
  }, [id]);

  const showMovie = details && crew && stars;
  const showMainCrew = directors && writers && stars;

  const title = details?.title ? details?.title : details?.name;
  const _date = details?.release_date
    ? details?.release_date
    : details?.first_air_date;

  const posterPath = getSafePosterUrl(details?.poster_path, MEDIUM_POSTER);

  return (
    <>
      {showMovie && (
        <Container>
          <MovieHeader>
            <h1>
              {title} ({new Date(_date).getFullYear()})
            </h1>
            <span>
              {details?.vote_average != null
                ? Number(details.vote_average).toFixed(1)
                : "N/A"}
              /10
            </span>
          </MovieHeader>
          <MovieTopDetails>
            <Photo>
              <Image
                alt={title}
                src={posterPath}
                width={185}
                height={278}
              />
            </Photo>
            {showMainCrew && (
              <MovieMainCrew>
                <p>{details.overview}</p>
                {mediatype == "movie" ? (
                  <>
                    <p>
                      <span>Director:</span>
                      <PeopleGroup limit={5} data={directors}></PeopleGroup>
                    </p>
                    <p>
                      <span>Writer:</span>
                      <PeopleGroup limit={5} data={writers}></PeopleGroup>
                    </p>
                  </>
                ) : (
                  <p>
                    <span>Creators:</span>
                    <PeopleGroup
                      limit={5}
                      data={details.created_by}
                    ></PeopleGroup>
                  </p>
                )}

                <p>
                  <span>Stars:</span>
                  <PeopleGroup limit={5} data={stars}></PeopleGroup>
                </p>
              </MovieMainCrew>
            )}
          </MovieTopDetails>
          <Suspense fallback={<div>Loading...</div>}>
            {stars.map((star, index) => (
              <ResultsCard key={index} result={star} category={"cast"} />
            ))}
          </Suspense>
        </Container>
      )}
    </>
  );
};

export default Movie;
