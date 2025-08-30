import Main from '../../components/Main';
import Movie from '../../components/Movie';
import { useRouter } from 'next/router';

export default function MovieNext() {
    const router = useRouter()
    const { id } = router.query
    
    return (<Main>
        {id && <Movie id={id} mediatype={'movie'}/>}
    </Main>);
};