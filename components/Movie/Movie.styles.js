import styled from 'styled-components';

export const MovieTopDetails = styled.div`
    display: flex;
    text-align: justify;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const MovieMainCrew = styled.div`
    flex: 1;

    @media (min-width: 768px) {
        padding-left: 1rem;
    }

    p {
        span {
            font-weight: 600;
            margin-right: 0.5rem;
        }
    }
`;

export const MovieHeader =  styled.div`
    background-color: #1b1b36;
    color: white;
    display: inline-flex;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px 8px 0 0;

    h1 { 
        font-weight: 600;
        margin: 0;
        font-size: 1.7rem;
    }

    span {
        font-weight: 600;
        font-size: 1rem;
        padding: 0.5rem;
        background-color: cornflowerblue;
        border-radius: 4px;
    }
`;