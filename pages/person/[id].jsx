import Main from '../../components/Main'
import Person from '../../components/Person'
import { useRouter } from 'next/router'

export default function MovieNext() {
    const router = useRouter()
    const { id } = router.query
    
    return (<Main>
        {id && <Person id={id} />}
    </Main>);
};