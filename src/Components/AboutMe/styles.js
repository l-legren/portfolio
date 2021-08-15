import styled from "styled-components";

export const AboutMeWrapper = styled.div`
    position: relative;
    top: 55px;
    display: flex;
    width: 100%;
    height: 100%;
    color: white;
`;
export const AboutMeLeft = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const AboutMeRight = styled.div`
    width: 30%;
    display: flex;
    align-items: flex-end;
`;

export const Separator = styled.div`
    align-self: center;
    height: 80%;
    border-left: 1px solid white;
`;

export const TextLeft = styled.h2`
    font-size: 4rem;
    text-align: left;
    padding: 100px 10px 50px 100px;

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
        font-size: 3rem;
        padding: 60px 10px 20px 60px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 2rem;
        padding: 30px 10px 20px 30px;
    }
`;

export const TextRight = styled.h2`
    font-size: 2rem;
    padding: 20px 100px 200px 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 1.5rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    }
`;
