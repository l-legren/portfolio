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

export const HeaderName = styled(Link)`
    font-size: 1.8rem;
    margin-left: 20px;
    color: white;
    align-self: center;
    font-weight: 300;
    text-decoration: none;
`;

export const HeaderLink = styled(Link)`
    font-size: 1.5rem;
    text-decoration: none;
    color: white;
`;
