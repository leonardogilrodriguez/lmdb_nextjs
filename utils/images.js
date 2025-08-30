import {
  IMAGE_CARD_URL,
  SMALL_POSTER,
  MEDIUM_POSTER,
  NO_IMAGE_URL
} from "./consts";

export const size = (size) => {
  return IMAGE_CARD_URL.replace("{size}", size);
};

export const smallPoster = () => {
  return size(SMALL_POSTER);
};

export const poster = () => {
  return size(MEDIUM_POSTER);
};

export const getSafePosterUrl = (path, imgSize) => {
    return path ? size(imgSize) + path : NO_IMAGE_URL
}