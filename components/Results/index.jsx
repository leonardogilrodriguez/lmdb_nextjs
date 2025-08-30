import { useEffect, useState } from "react";
import { getResults } from "../../API";

import ResultsList from "./ResultsList";
import ResultsCard from "../Card";

import { Container } from '../../styles/Styles.common';

const Results = (props) => {
  const { query } = props;
  const [results, setResults] = useState(null);
  const [resultsWithCategory, setResultsWithCategory] = useState(null);

  const getData = async (category, query) => {
    if (!query) return null;

    const data = await getResults(category, query);
    const filteredData =
      category === "person"
        ? data.results
        : data.results.filter((item) => item.release_date !== "");
    const results = filteredData.sort((a, b) => {
      if (category === "person") {
        return a.popularity < b.popularity ? -1 : 1;
      }
      return a.release_date > b.release_date ? 1 : -1;
    });

    return results;
  };

  const handleSearch = async () => {
    const arrayPromises = ["person", "movie", "tv"].map(async (category) =>
      getData(category, query)
    );
    const results = await Promise.all(arrayPromises);
    const resultsWithCategory = results.map((result, index) => ({
      category: ["People", "Movies", "TV"][index],
      results: result,
    }));

    setResults(results);
    setResultsWithCategory(resultsWithCategory);
  };

  useEffect(() => {
    if (query) {
      handleSearch();
    }
  }, [query]);

  return (
    <Container>
      {results?.flat().length > 0 ? (
        resultsWithCategory?.map((result) => {
          if (result?.results?.length === 0) return null;
          return (
            <>
              <h3>{result.category}</h3>
              <ResultsList
                results={result.results}
                category={result.category.toLowerCase()}
              />
            </>
          );
        })
      ) : (
        <p>No results for this search</p>
      )}
    </Container>
  );
};

export default Results;
export { ResultsList, ResultsCard };
