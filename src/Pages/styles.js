import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
    cursor: default;
    width: auto;
    position: absolute;
    bottom: 5%;
`;

export const ArrowDown = styled(IoIosArrowDown)`
    color: white;
    font-size: 40px;
    transition: 0.5s ease-in-out all;
    transform: ${({ comingview }) =>
        comingview === 2 ? "rotate(180deg)" : "rotate(0)"};
`;

export const HomeScreen = styled.div`
    /* object-fit: cover; */
    width: 100%;
    height: 100%;
`;
