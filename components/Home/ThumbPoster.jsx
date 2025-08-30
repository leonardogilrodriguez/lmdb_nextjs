import Link from 'next/link';
import Image from 'next/image';
import { getSafePosterUrl } from './../../utils/images';
import { MEDIUM_POSTER } from './../../utils/consts';

const ThumbPoster = (props) => {
    const { item } = props;

    return <Link href={`/movie/${item.id}`}>
        <Image 
            alt={item.title} 
            width={185}
            height={278}
            src={getSafePosterUrl(item.poster_path, MEDIUM_POSTER)}
        />
    </Link>;
};

export default ThumbPoster;