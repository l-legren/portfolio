import styled from "styled-components";

export const Grid = styled.div`
    /* height: 100vh; */
    display: grid;
    column-gap: 25px;
    row-gap: 12px;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 0 70px 0;
    padding: 0;
    background-color: black;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
        position: absolute;
        top: 80px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
