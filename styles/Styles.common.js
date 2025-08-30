import styled from 'styled-components';
import Link from 'next/image';

export const Container = styled.div`
    max-width: 1008px;
    margin: 0 auto;
    padding: 1rem 3rem;
    box-sizing: border-box;

    @media (max-width: 767px) {
        padding: 1rem;
    }
`;

export const ThumbPosterLink = styled(Link)`
    width: 185px;
    height: 278px;
`;

export const Photo = styled.div`
    width: 185px;
    height: 278px;
    margin: 0.5rem 0;
    position: relative;
    
    img {
        border-radius: 0.5rem;
        border: 1px solid lightgray;
    }

    @media (max-width: 767px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const ListCard = styled.div`
    --lightGrey: 227,227,227;
    display: flex;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(var(--lightGrey), 1);
    background-color: #fff;
    overflow: hidden;
`;

export const ListImage = styled.div`
    width: 3rem;
    height: 4.5rem;
    position: relative;
`;

export const ListMain = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ListCardTitle = styled.div`
    flex: 1;
    flex-wrap: wrap;
    flex-direction: column;
    display: flex;
    padding: 0 1rem;

    a {
        font-weight: bold;
    }

    span {
        font-weight: 400;
        font-style: italic;
        font-size: 0.9rem;
    }
`;