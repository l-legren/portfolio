import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";

// Local Imports
import FullSizeContainer from "../Components/FullSizeContainer/FullSizeContainer";

// const cardinals = {
//     1: "first",
//     2: "second",
// };

const ButtonWrapper = styled.div`
    cursor: pointer;
    width: auto;
    position: absolute;
    bottom: 5%;
`;

const ArrowDown = styled(IoIosArrowDown)`
    color: white;
    font-size: 40px;
    transition: 0.5s ease-in-out all;
    transform: ${({ comingView }) =>
        comingView === 3 ? "rotate(180deg)" : "rotate(0)"};
`;

const ArrowUp = styled(IoIosArrowUp)`
    color: white;
    font-size: 40px;
`;

const HomeScreen = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export default function Main() {
    const [actualView, setActualView] = useState(1);

    useEffect(() => {
        // console.log(process.env);
    }, []);

    const handleArrowClick = (e) => {
        // setActualView(actualView + 1);

        console.log(actualView, e.target.parentNode.nextSibling);

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

        if (nextView) {
            scroll(nextView.elem);
            setActualView(nextView.number);
        } else {
            window.scrollTo(0,0)
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
        <>
            {views.map((view) => (
                <FullSizeContainer key={view.id}>
                    <HomeScreen id={view.id} src={view.imageUrl} />
                    <ButtonWrapper onClick={(e) => handleArrowClick(e)}>
                        <ArrowDown comingView={actualView} />
                    </ButtonWrapper>
                </FullSizeContainer>
            ))}
        </>
    );
}
