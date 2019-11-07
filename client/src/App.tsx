import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NoMatchPage } from "./pages/404";
import { SavedPage } from "./pages/Saved";
import { SearchPage } from "./pages/Search";

// import { IBook } from "../../interfaces/IBook";

// import { Api } from "./Api";
// import { SideBar } from "./components/SideBar/SideBar";
// import { Tile } from "./components/Tile/Tile";
// import { TilesWrapper } from "./components/TilesWrapper/TilesWrapper";
// import { Wrapper } from "./components/Wrapper/Wrapper";
// import { ITile } from "./data/ITile";
// import { tiles } from "./data/tiles";


export function App(): JSX.Element {

    return (

        <BrowserRouter>
            {/* <div> */}
                {/* <Nav /> */}
                <Switch>
                    <Route exact={true} path="/" component={SearchPage} />
                    <Route exact={true} path="/saved" component={SavedPage} />
                    <Route component={NoMatchPage} />
                </Switch>
            {/* </div> */}
        </BrowserRouter>
    );
}