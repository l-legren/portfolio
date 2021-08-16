import styled from "styled-components";

export const TypingTextWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: transparent;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin: 50px 0 100px 0;
    }
`;

export const TypingTextContent = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.xl};
`;

export const TypingTextTyping = styled.h1`
    min-height: 400px;
    font-size: 100px;
    font-weight: 300;
    white-space: wrap;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: ${({ theme }) => theme.colors.light1};
    padding: 80px;
    border-radius: 5px;
    border: 1px solid white;
    opacity: 0.4;
    background-color: black;
    cursor: default;

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
        margin: 60px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 80px;
        margin: 40px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 60px;
        margin: 30px;
        min-height: 300px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        min-height: 200px;
        margin: 20px;
        padding: 20px;
        font-size: 40px;
    }
`;
