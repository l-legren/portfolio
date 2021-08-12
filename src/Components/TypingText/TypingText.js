import React, { useEffect, useState } from "react";
import {
    TypingTextContent,
    TypingTextWrapper,
    TypingTextTyping,
} from "./styles";

export default function TypingText() {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        const textData = [
            "Carlos Leret",
            "Web and Frontend Development",
            "Javascript, TypeScript",
            "React, Redux, Node, Jest",
            "Styled Components, Storybook",
            "Git, CLI, Bash",
            "Your friendly Dev"
        ];

        const typeWriter = (text, i, callback) => {
            if (i < text.length) {
                setDisplayedText(`${text.substring(0, i + 1)}`);

                setTimeout(function () {
                    typeWriter(text, i + 1, callback);
                }, 200);
            } else if (typeof callback == "function") {
                setTimeout(callback, 700);
            }
        };

        const startTextAnimation = (i) => {
            if (typeof textData[i] === "undefined") {
                setTimeout(function () {
                    startTextAnimation(0);
                }, 5000);
            } else if (i < textData[i].length) {
                typeWriter(textData[i], 0, function () {
                    startTextAnimation(i + 1);
                });
            }
        };
        startTextAnimation(0);
    }, []);

    return (
        <TypingTextWrapper>
            <TypingTextContent>
                <TypingTextTyping>{displayedText}</TypingTextTyping>
            </TypingTextContent>
        </TypingTextWrapper>
    );
}
