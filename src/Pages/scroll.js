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
