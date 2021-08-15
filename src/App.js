import { Switch, Route } from "react-router-dom";

// Components
import Header from "./Components/Header/Header";

// Pages
import Main from "./Pages/Main/Main";
import Projects from "./Pages/Projects/Projects";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <Main />} />
                <Route path="/projects" render={() => <Projects />} />
            </Switch>
        </>
    );
}

export default App;
