import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";

//Helpers
import {
  getCombinedDetailsPerson,
  getPerson,
  getPersonTranslation,
} from "../../API";
import { getSafePosterUrl } from "../../utils/images";
import { MEDIUM_POSTER, AUX_JOBS_KEYS } from "../../utils/consts";
//Styles
import {
  PersonTopDetails,
  PersonBio,
  PersonJobHeader,
  PersonName,
} from "./Person.styles";
import { Photo, Container } from "../../styles/Styles.common";
//Components
import ResultsList from "../Results/ResultsList";

const Person = (props) => {
  const [details, setDetails] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [knownFor, setKnownFor] = useState(null);

  const getPersonData = async (id) => {
    const [_combined, _person, _translations] = await Promise.all([
      getCombinedDetailsPerson(id),
      getPerson(id),
      getPersonTranslation(id),
    ]);

    let details = { ..._person };

    if (!details.biography) {
      const englishTranslation = _translations.translations.find(
        (item) => item.name === "English"
      )?.data?.biography;

      if (englishTranslation) {
        details.biography = englishTranslation;
      }
    }

    let jobs = _combined.crew.reduce(function (r, a) {
      r[a.job] = r[a.job] || [];
      r[a.job].push(a);
      return r;
    }, Object.create(null));

    if (_combined.cast.length) {
      jobs["Acting"] = _combined.cast;
    }

    let allCombined = [...(_combined.cast || []), ...(_combined.crew || [])];
    allCombined = Array.from(new Set(allCombined.map((a) => a.id))).map(
      (id) => {
        return allCombined.find((a) => a.id === id);
      }
    );
    let allCombinedKnownFor = allCombined.filter((item) => {
      return item.job === AUX_JOBS_KEYS[details.known_for_department];
    });
    let knownFor = allCombinedKnownFor.sort((a, b) =>
      a.popularity < b.popularity ? 1 : -1
    );

    setDetails(details);
    setJobs(jobs);
    setKnownFor(knownFor.slice(0, 12));
  };

  useEffect(() => {
    if (props.id) {
      getPersonData(props.id);
    }
  }, [props.id]);

  let jobKeys = jobs ? Object.keys(jobs) : [];

  if (details) {
    const knownForKey =
      AUX_JOBS_KEYS[details.known_for_department] ||
      details.known_for_department;
    const index = jobKeys.indexOf(knownForKey);
    if (index > -1) {
      jobKeys.splice(index, 1);
      jobKeys.unshift(knownForKey);
    }
  }

  const profilePath = getSafePosterUrl(details?.profile_path, MEDIUM_POSTER);

  return (
    <Container>
      {details && (
        <>
          <PersonName>{details.name}</PersonName>
          <PersonTopDetails>
            <Photo>
              <Image
                alt={details.title}
                src={profilePath}
                width={185}
                height={278}
              />
            </Photo>

            <PersonBio>
              <p>{details.biography}</p>
            </PersonBio>
          </PersonTopDetails>
        </>
      )}
      {jobs &&
        jobKeys.map((item, index) => {
          return (
            <React.Fragment key={"job_" + index}>
              {jobs[item] && (
                <>
                  <PersonJobHeader>
                    <h4>
                      {item} ({jobs[item].length}{" "}
                      {jobs[item].length > 1 ? "credits" : "credit"})
                    </h4>
                  </PersonJobHeader>
                  <Suspense fallback={<div>Loading...</div>}>
                    <ResultsList
                      results={jobs[item]}
                      category={"combined"}
                    ></ResultsList>
                  </Suspense>
                </>
              )}
            </React.Fragment>
          );
        })}
    </Container>
  );
};

export default Person;
