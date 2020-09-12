import React from "react";
import { Switch, Route } from "react-router-dom";

import userList from "../components/User/List";
import userCreate from "../components/User/Create";
import userEdit from "../components/User/Edit";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={userList} />
            <Route path="/create" exact component={userCreate} />
            <Route path="/edit/:id" exact component={userEdit} />
        </Switch>
    );
}
