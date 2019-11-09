import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NoMatchPage } from "./pages/404";
import { SavedPage } from "./pages/Saved";
import { SearchPage } from "./pages/Search";
import { htmlRoutes } from "./routes/html/htmlRoutes";


export function App(): JSX.Element {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact={true} path={htmlRoutes.searchPageRoute} component={SearchPage} />
                <Route exact={true} path={htmlRoutes.savedPageRoute} component={SavedPage} />
                <Route component={NoMatchPage} />
            </Switch>
        </BrowserRouter>
    );
}