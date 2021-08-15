import styled from "styled-components";

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
`;

export const SingleProjectWrapper = styled.div`
    display: flex;
`

export const SingleProject = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
`

export const SingleProjectTitle = styled.a`
    color: white;
    text-decoration: none;
    cursor: pointer
`;

export const Technologies = styled.div`
    display: flex;
`;

export const SingleTechnology = styled.p`
    margin-right: 10px;
    color: white;
    cursor: default
`