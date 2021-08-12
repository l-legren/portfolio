import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Header from './Components/Header/Header'

// Pages
import Main from "./Pages/Main";

function App() {

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
