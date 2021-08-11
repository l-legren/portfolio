import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

// Local Imports
import FullSizeContainer from "../Components/FullSizeContainer/FullSizeContainer";

const CustomizedIcon = styled(IoIosArrowDown)`
    color: white;
    font-size: 40px;
    position: absolute;
    bottom: 5%;
`;

export default function Main() {
    return (
        <FullSizeContainer>
            <CustomizedIcon />
        </FullSizeContainer>
    );
}
