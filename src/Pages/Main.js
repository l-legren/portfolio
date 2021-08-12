import React, { useState } from "react";
// Local Imports
import FullSizeContainer from "../Components/FullSizeContainer/FullSizeContainer";
import { ButtonWrapper, HomeScreen, ArrowDown } from "./styles";

import ReactPageScroller from "react-page-scroller";

// const viewIds = ["#first-view", "#second-view", "#third-view"];

export default function Main() {
    const [actualView, setActualView] = useState(0);

    const handleScrollPage = (number) => {
        console.log("handling scroll page", number);
        setActualView(number);
    };

    const handleArrowClick = (e) => {

        console.log("clicking")

        const nextView = {
            elem: e.target.parentNode.nextSibling,
            number: actualView + 1,
        };

        function scroll(view) {
            if (view) {
                view.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                });
            }
        }

        if (nextView.number <= 3) {
            scroll(nextView.elem);
            setActualView(nextView.number);
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            setActualView(0);
        }
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
                    <HomeScreen id={view.id} src={view.imageUrl} />
                    <ButtonWrapper onClick={(e) => handleArrowClick(e)}>
                        <ArrowDown comingview={actualView} />
                    </ButtonWrapper>
                </FullSizeContainer>
            ))}
        </ReactPageScroller>
    );
}
