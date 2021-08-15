import styled from "styled-components";

export const SingleCard = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

export const CardHeader = styled.h4`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.light1};
`;

export const UpOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.6;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: black;
`;

export const ImageContainer = styled.a`
    position: relative;
    height: 100%;
    cursor: pointer;
    background-color: black;
`;

export const Overlay = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    top: 0;
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 1s ease all;

    &:hover {
        opacity: 0.7;
    }
`;

export const ProjectName = styled.h4`
    color: ${({ theme }) => theme.colors.light1};
    font-size: 1.5rem;
    margin: 20px 0 10px 0;
`;

export const ProjectTechnology = styled.p`
    color: ${({ theme }) => theme.colors.light1};
    font-size: 1rem;
    margin-top: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 0.8rem;
        margin-top: 0px;
    }
`;
