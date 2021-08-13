import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";

// Local Imports
import FullSizeContainer from "../Components/FullSizeContainer/FullSizeContainer";
import { ButtonWrapper, HomeScreen, ArrowDown } from "./styles";
import TypingText from "../Components/TypingText/TypingText";

export default function Main() {
    const [actualView, setActualView] = useState(0);

    const handleScrollPage = (number) => {
        console.log("handling scroll page", number);
        setActualView(number);
    };

    const views = [
        {
            id: "first-view",
            imageUrl: "/images/prog1.jpg",
        },
        {
            id: "second-view",
            imageUrl: "/images/prog2.jpg",
        },
        {
            id: "third-view",
            imageUrl: "/images/prog3.jpg",
        },
    ];

    return (
        <ReactPageScroller pageOnChange={handleScrollPage}>
            {views.map((view) => (
                <FullSizeContainer key={view.id}>
                    <HomeScreen
                        id={view.id}
                        style={{
                            backgroundImage: `url(${view.imageUrl})`,
                            backgroundSize: "cover",
                        }}
                    >
                        {view.id === "first-view" ? <TypingText /> : null}
                    </HomeScreen>
                    <ButtonWrapper>
                        <ArrowDown comingview={actualView} />
                    </ButtonWrapper>
                </FullSizeContainer>
            ))}
        </ReactPageScroller>
    );
}
