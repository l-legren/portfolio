import styled from "styled-components";

export const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: black;
`;

export const ProjectsContent = styled.div`
    width: ${({ theme }) => theme.breakpoints.xl};
    margin-top: 50px;
`;
