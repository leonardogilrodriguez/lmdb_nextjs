import Link from "next/link";
import Image from "next/image";
import { ListCardRating } from "./card.styles";
import {
  ListCard,
  ListImage,
  ListMain,
  ListCardTitle,
} from "../../styles/Styles.common";
import { NO_IMAGE_URL, SMALL_POSTER } from "../../utils/consts";
import { getSafePosterUrl } from "../../utils/images";

const ResultsCard = ({ result, index, category }) => {
  // Diccionario de configuración por categoría con tipado
  const categoryConfig = {
    people: {
      getTitle: () => result.name || "Untitled",
      getSubtitle: () => {
        const department = result.known_for_department || "";
        const knownFor = result.known_for
          ? result.known_for.map((item) => item.title || item.name).join(", ")
          : "";
        return `${department}${knownFor ? ` - ${knownFor}` : ""}`.trim();
      },
      getImage: () => getSafePosterUrl(result.profile_path, SMALL_POSTER),
      getMediaType: () => "person",
      getYear: () => "",
      showRating: false,
    },
    movies: {
      getTitle: () => result.title || "Untitled",
      getSubtitle: () => result.original_title || "Untitled",
      getImage: () => getSafePosterUrl(result.poster_path, SMALL_POSTER),
      getMediaType: () => result.media_type || "movie",
      getYear: () => `(${result.year === 9999 ? "-" : result.year})`,
      showRating: true,
    },
    tv: {
      getTitle: () => result.name || "Untitled",
      getSubtitle: () => result.original_name || "Untitled",
      getImage: () => getSafePosterUrl(result.poster_path, SMALL_POSTER),
      getMediaType: () => result.media_type || "tv",
      getYear: () => `(${result.year === 9999 ? "-" : result.year})`,
      showRating: true,
    },
    combined: {
      getTitle: () => result.title || result.name || "Untitled",
      getSubtitle: () => {
        if (Object.keys(result).includes("character"))
          return result.character || "";

        return result.original_title || result.original_name || "Untitled";
      },
      getImage: () => getSafePosterUrl(result.poster_path, SMALL_POSTER),
      getMediaType: () => result.media_type || "movie",
      getYear: () => `(${result.year === 9999 ? "-" : result.year})`,
      showRating: true,
    },
    cast: {
      getTitle: () => result.name || "Untitled",
      getSubtitle: () => result.character || "",
      getImage: () => getSafePosterUrl(result.profile_path, SMALL_POSTER),
      getMediaType: () => "person",
      getYear: () => "",
      showRating: false,
    },
  };

  // Configuración por defecto
  const defaultConfig = {
    getTitle: () => "Untitled",
    getSubtitle: () => "Untitled",
    getImage: () => NO_IMAGE_URL,
    getMediaType: () => "movie",
    getYear: () => "",
    showRating: false,
  };

  // Obtener configuración según categoría
  const config = categoryConfig[category] || defaultConfig;

  // Valores finales
  const title = config.getTitle();
  const subtitle = config.getSubtitle();
  const image = config.getImage();
  const mediaType = config.getMediaType();
  const year = config.getYear();
  const showRating = config.showRating;

  return (
    <ListCard key={`${result.id}_${index}`}>
      <ListImage>
        <Image alt={title} src={image} height={72} width={48} />
      </ListImage>
      <ListMain>
        <ListCardTitle>
          <Link href={`/${mediaType}/${result.id}`}>
            {title} {year}
          </Link>
          <span>{subtitle}</span>
        </ListCardTitle>
        {showRating && (
          <ListCardRating>
            {result.vote_count && result.vote_count > 0 && result.vote_average
              ? result.vote_average.toFixed(1)
              : "-"}
          </ListCardRating>
        )}
      </ListMain>
    </ListCard>
  );
};

export default ResultsCard;
