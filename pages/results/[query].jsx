import Main from '../../components/Main'
import Results from '../../components/Results'
import { useRouter } from 'next/router'

export default function MovieNext() {
    const router = useRouter()
    const { query } = router.query
    
    return (<Main>
        <Results query={query} />
    </Main>);
};