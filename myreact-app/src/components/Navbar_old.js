import React from 'react'
import PropTypes from 'prop-types';
import WithApi from './WithApi';
// import ApiCrud from './ApiCrud';
import HtmlForm from './HtmlForm';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ApiCrud from './ApiCrud';
// import { FormGroup ,FormControlLabel } from 'react-bootstrap'

export default function Navbar(props) {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/crud">{props.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/country/list/api">{props.link}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/api">{props.apiCrud}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {/* <FormGroup>
                            <FormControlLabel
                                control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
                                label="Small"/>
                        </ FormGroup> */}
                    </div>
                    </div>
            </nav>
                <Switch>
                    <Route path="/crud">
                        <HtmlForm />
                    </Route>
                    <Route path="/country/list/api">
                        <WithApi />
                    </Route>
                    {/* <Route path="/">
                    <HtmlForm />
                </Route> */}
                    <Route path="/api">
                        <ApiCrud />
                    </Route>
                </Switch>
        </Router>
            )
}

            Navbar.propTypes = {
                title: PropTypes.string.isRequired,
            home: PropTypes.string.isRequired,
};

            Navbar.defaultProps = {
                title: "Add Title",
            home: "Add home",
}
