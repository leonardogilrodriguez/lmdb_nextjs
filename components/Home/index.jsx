import React, { useState, useEffect } from 'react';
import { getPopulars } from '../../API';
import { Container } from './Home.styles';
import ThumbPoster from './ThumbPoster';

const HomeDB = () => {
    const [popular,setPopular]=useState([]);

    const fetchPopulars = async() => {
        const _populars = await getPopulars(1);
        setPopular(_populars.results);
    };

    useEffect(() => {
        fetchPopulars();
    },[]);

    return (<>
        {
            popular.length > 0 && <Container width={'100%'} maxWidth={'1008px'} id="ThumbContainer">
                {
                    popular.map((item, index) => <ThumbPoster key={index} item={item}></ThumbPoster>)
                }
            </Container>
        }
    </>);
}

export default HomeDB;