import styled from 'styled-components';

export const Container = styled.div((props) => `
    width: ${props.width};
    max-width: ${props.maxWidth};
    margin: 0 auto;
    padding: 1rem 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 1rem;
    box-sizing: border-box;

    img {
    height: auto;
    width: 100%
    }

    @media (max-width: 767px) {
        padding: 1rem;
    }
`);
