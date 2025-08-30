import styled from 'styled-components';

export const PersonTopDetails = styled.div`
    display: flex;
    text-align: justify;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const PersonBio = styled.div`
    flex: 1;

    p {
        margin: 0;
    }

    @media (min-width: 768px) {
        padding-left: 1rem;
    }
`;

export const PersonJobHeader = styled.div`
    background-color: #Eee;
    border-top: #E8E8E8 1px solid;
    cursor: pointer;
    font-size: 15px;
    color: #A58500;
    margin: 1rem 0 1px 0;
    padding: 6px 10px;
    text-shadow: 0 0 0.2em #Fff, 0 0 0.2em #Fff;

    h4 {
        margin: 0;
    }
`;

export const PersonName = styled.h3`
    border-bottom: 3px solid #1b1b36;
`;