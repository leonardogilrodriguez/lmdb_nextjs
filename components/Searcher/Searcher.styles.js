import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    background-color: rgb(27, 27, 54);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    max-width: 1008px;
    min-height: 2rem;
    display: inline-flex;
    border-radius: 0.5rem;
    overflow: hidden;
    padding: 1rem 3rem;
    box-sizing: border-box;

    @media (max-width: 767px) {
        padding: 0 1rem;
    }
`;

export const FormMain = styled.form`
    display: flex;
    flex: 1;

    input {
        font-size: 0.8rem;
        flex: 1;
    }

    button {
        width: 3rem;
    }
`;

export const Logo = styled.button`
    background-color: aliceblue;
    color: black;
    border-radius: 0.5rem;
    width: 3rem;
    margin-right: 0.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
`;