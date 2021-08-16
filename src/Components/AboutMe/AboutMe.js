import React from "react";
import {
    AboutMeLeft,
    AboutMeRight,
    AboutMeWrapper,
    Separator,
    TextLeft,
    TextRight,
} from "./styles";

export default function AboutMe() {
    return (
        <AboutMeWrapper>
            <AboutMeLeft>
                <TextLeft>
                    Hola, my name is{" "}
                    <span style={{ color: "orange" }}>Carlos Leret</span>, I
                    come from <span style={{ color: "orange" }}>Spain</span> but
                    lived in <span style={{ color: "orange" }}>Berlin</span>
                    for almost a decade. One day, I started programming...
                </TextLeft>
            </AboutMeLeft>
            <Separator />
            <AboutMeRight>
                <TextRight>
                    "I am a frontend engineer who enjoys building user
                    interfaces with{" "}
                    <span style={{ color: "orange" }}>JavaScript</span>. I felt
                    in love with React because or unidirectional data binding
                    and its beautiful and intuitive{" "}
                    <span style={{ color: "orange" }}>JSX</span>..."
                </TextRight>
            </AboutMeRight>
        </AboutMeWrapper>
    );
}
