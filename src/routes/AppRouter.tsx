import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// //NOTE components
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
// import Page404 from "../components/Page404/Page404";

// import AddExpensePage from "../components/AddExpense/AddExpense.jsx";
// import EditExpensePage from "../components/EditExpense/EditExpensePage.jsx";
// import HelpPage from "../components/HelpPage/HelpPage.jsx";

const AppRouter = () => (
    <Router>
        <div>
            <NavBar />
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                {/* <Route component={Page404} /> */}
                {/* <Route path="/help" component={HelpPage} /> */}
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
