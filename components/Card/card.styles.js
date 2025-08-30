import styled from 'styled-components';

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
        font-weight: italic;
    }
`;

export const ListCardRating = styled.div`
    background-color: cornflowerblue;
    color: white;
    width: 3rem;
    height: 100%;
    font-size: larger;
    font-weight: 700;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;