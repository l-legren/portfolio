var lastScrollTop = 0;

window.addEventListener("scroll", () => {
    var offset = window.pageYOffset;
    if (offset > lastScrollTop) {
        const nextView = actualView + 1;
        const nextDiv = document.querySelector(`#${cardinals[nextView]}-view`);
        if (nextDiv) {
            nextDiv.scrollIntoView({
                block: "center",
                behavior: "smooth",
            });
            setTimeout(() => {
                setActualView(nextView);
            }, 500);
        }
        console.log(nextDiv);
    } else {
        const prevView = actualView - 1;
        const prevDiv = document.querySelector(`#${cardinals[prevView]}-view`);
        if (prevDiv) {
            prevDiv.scrollIntoView({
                block: "center",
                behavior: "smooth",
            });
            setTimeout(() => {
                setActualView(prevView);
            }, 500);
            }
        console.log("Going Up", prevDiv);
    }
    lastScrollTop = offset < 0 ? 0 : offset;
});

return () => {
    window.removeEventListener("scroll", () => {});
};


    useEffect(() => {
        const offsets = viewIds.reduce((acc, val) => {
            const cardinal = val.substr(1).split("-")[0];

            acc[cardinal] = document
                .querySelector(`#${cardinal}-view`)
                .getBoundingClientRect();

            return acc;
        }, {});

        const onScroll = (e) => {
            // setScrollTop(e.target.documentElement.scrollTop)
            setScrollTop(window.scrollY)
            console.log("OFFSET", offsets.first.bottom) // Problem here with number
            console.log("scrollTop", scrollTop) // Problem here with number
            if (scrollTop > offsets.first) {
                setActualView(2);
                console.log("In View 2", actualView);
            }
        };
        window.addEventListener("scroll", throttle(onScroll, 100));

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);


        const handleArrowClick = (e) => {
            const nextView = {
                elem: e.target.parentNode.parentNode.nextSibling,
                number: actualView + 1,
            };
            console.log("clicking", e.target.parentNode.parentNode.nextSibling);

            function scroll(view) {
                if (view) {
                    view.scrollIntoView({
                        block: "center",
                        behavior: "smooth",
                    });
                    setActualView(view);
                }
            }

            if (nextView.number <= 2) {
                scroll(nextView.elem);
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                setActualView(0);
            }
        };