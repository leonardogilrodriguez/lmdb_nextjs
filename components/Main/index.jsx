import React from 'react';
import Searcher from '../Searcher';

const Main = (props) => {
    const { children } = props;
    return(<>
        <Searcher></Searcher>
        {children}
    </>);
}

export default Main;