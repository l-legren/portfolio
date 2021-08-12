import React, { useEffect, useState } from "react";
// Local Imports
import FullSizeContainer from "../Components/FullSizeContainer/FullSizeContainer";
import { MainContainer, ButtonWrapper, HomeScreen, ArrowDown } from "./styles";
import { throttle } from "lodash";

// const cardinals = {
//     1: "first",
//     2: "second",
//     3: "third",
// };

const viewIds = ["#first-view", "#second-view", "#third-view"];

export default function Main() {
    const [actualView, setActualView] = useState(1);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const offsets = viewIds.reduce((acc, val) => {
            const cardinal = val.substr(1).split("-")[0];

            acc[cardinal] = document
                .querySelector(`#${cardinal}-view`)
                .getBoundingClientRect();

            return acc;
        }, {});

        const onScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop)
            console.log("OFFSET", offsets.first) // Problem here with number
            console.log("scrollTop", scrollTop) // Problem here with number
            // if (scrollTop > offsets.first) {
            //     setActualView(2);
            //     console.log("In View 2", actualView);
            // }
        };
        window.addEventListener("scroll", throttle(onScroll, 100));

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    const handleArrowClick = (e) => {
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
            setActualView(1);
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
        <MainContainer>
            {views.map((view) => (
                <FullSizeContainer key={view.id}>
                    <HomeScreen id={view.id} src={view.imageUrl} />
                    <ButtonWrapper onClick={(e) => handleArrowClick(e)}>
                        <ArrowDown comingview={actualView} />
                    </ButtonWrapper>
                </FullSizeContainer>
            ))}
        </MainContainer>
    );
}
