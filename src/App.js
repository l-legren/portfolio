import { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

// Components
import Header from './Components/Header/Header'

// Pages
import Main from "./Pages/Main";

function App() {

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        
        // else {
        //     const anchor = document.querySelector(
        //         `#${location.pathname.substr(1)}`
        //     );

        //     if (anchor) {
        //         anchor.scrollIntoView({
        //             block: "top",
        //             behavior: "smooth",
        //         });
        //     }
        // }
    }, [location]);

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <Main />} />
                <Route path="/second-view" />
            </Switch>
        </>
    );
}

export default App;
