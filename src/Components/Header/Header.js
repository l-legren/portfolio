import React from "react";
// Styles
import { HeaderName, HeaderWrapper } from "./styles";

import { HeaderLink } from "./styles";

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderName to='/' >CARLOS LERET</HeaderName>
            <HeaderLink to="/projects">Projects</HeaderLink>
        </HeaderWrapper>
    );
}
