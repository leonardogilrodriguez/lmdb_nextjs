import ResultsCard from "../Card";

const ResultsList = (props) => {
  const { results, category } = props;
  let processedResults = results.map((item) => {
    let date = item.release_date
      ? item.release_date
      : item.first_air_date
      ? item.first_air_date
      : "";
    let year = date !== "" ? new Date(date).getFullYear() : 9999;
    let media_type = Object.keys(item).includes("release_date")
      ? "movie"
      : "tv";
    return { ...item, year: year, media_type: media_type };
  });

  processedResults = processedResults.sort((a, b) =>
    a.year < b.year ? 1 : -1
  );

  return (
    <>
      {props.results.length === 0 ? (
        <h3>No results</h3>
      ) : (
        <div id="search_results">
          {processedResults.map((result, index) => (
            <ResultsCard
              key={`${result.id}_${index}`}
              result={result}
              index={index}
              category={category}
            ></ResultsCard>
          ))}
        </div>
      )}
    </>
  );
};

export default ResultsList;
