import styled from 'styled-components';

export const Container = styled.div((props) => `
    width: ${props.width};
    max-width: ${props.maxWidth};
    margin: 0 auto;
    padding: 1rem 3rem;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`);
