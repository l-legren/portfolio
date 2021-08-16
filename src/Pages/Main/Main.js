import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";

// Local Imports
import FullSizeContainer from "../../Components/FullSizeContainer/FullSizeContainer";
import { ButtonWrapper, HomeScreen, ArrowDown } from "./styles";
import TypingText from "../../Components/TypingText/TypingText";
import AboutMe from "../../Components/AboutMe/AboutMe";
import ContactMe from "../../Components/ContactMe/ContactMe";

export default function Main() {
    const [actualView, setActualView] = useState(0);

    const handleScrollPage = (number) => {
        console.log("handling scroll page", number);
        setActualView(number);
    };

    const views = [
        {
            id: "first-view",
            imageUrl: "/images/prog3.jpg",
        },
        {
            id: "second-view",
            imageUrl: "/images/aboutme.jpg",
        },
        {
            id: "third-view",
            imageUrl: "/images/view3.jpg",
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
                        {view.id === "first-view" ? (
                            <TypingText />
                        ) : view.id === "second-view" ? (
                            <AboutMe />
                        ) : view.id === "third-view" ? (
                            <ContactMe />
                        ) : null}
                    </HomeScreen>
                    <ButtonWrapper>
                        <ArrowDown comingview={actualView} />
                    </ButtonWrapper>
                </FullSizeContainer>
            ))}
        </ReactPageScroller>
    );
}
