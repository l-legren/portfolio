import styled from "styled-components";

export const TypingTextWrapper = styled.div`
    position: relative;
    top: 55px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    margin: 100px 0 100px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin: 50px 0 100px 0;
    }
`;

export const TypingTextContent = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.xl};
`;

export const TypingTextTyping = styled.h1`
    min-height: 600px;
    font-size: 120px;
    color: #fff;
    overflow: hidden;
    white-space: wrap;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.primary};
    padding: 20px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 80px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 60px;
        min-height: 300px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 40px;
    }
`;
