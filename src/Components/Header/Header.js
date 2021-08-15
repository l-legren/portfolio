import React from "react";
// Styles
import { HeaderName, HeaderWrapper } from "./styles";

import { HeaderLink, HeaderContent } from "./styles";

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <HeaderName to="/">CARLOS LERET</HeaderName>
                <HeaderLink to="/projects">Projects</HeaderLink>
            </HeaderContent>
        </HeaderWrapper>
    );
}
