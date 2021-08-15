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
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit..."
                </TextLeft>
            </AboutMeLeft>
            <Separator />
            <AboutMeRight>
                <TextRight>
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit..."
                </TextRight>
            </AboutMeRight>
        </AboutMeWrapper>
    );
}
