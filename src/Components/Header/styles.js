import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    height: 55px;
    border-bottom: 1px white solid;
    z-index: 1;
`;

export const HeaderContent = styled.div`
    width: ${({ theme }) => theme.breakpoints.xl};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const HeaderName = styled(Link)`
    font-size: 1.8rem;
    margin-left: 20px;
    color: white;
    align-self: center;
    font-weight: 300;
    text-decoration: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 20px;
    }
`;

export const HeaderLink = styled(Link)`
    font-size: 1.2rem;
    text-decoration: none;
    color: white;
    margin-right: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 15px;
    }
`;
