import { Switch, Route } from "react-router-dom";
import Main from "./Pages/Main";

function App() {
    return (
        <Switch>
            <Route exact path="/" render={() => <Main />} />
        </Switch>
    );
}

export default App;
