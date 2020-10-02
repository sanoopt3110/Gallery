import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import { userActions } from '../../_actions';

const Header = (props)=> {
        const { user } = props;
        const logout = () =>{
            props.logout();
        }
        return (
            <div className="home">
                <nav className="navbar navbar-inverse navbar-static-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">MY WEBSITE</Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><NavLink exact activeClassName="selected" to="/">Home</NavLink></li>
                            <li><NavLink exact activeClassName="selected" to="/edit-image-gallery">Actions</NavLink></li>
                        </ul>
                        {
                            !user ? <ul className="nav navbar-nav navbar-right">
                                        <li><NavLink exact activeClassName="selected" to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</NavLink></li>
                                        <li><NavLink exact activeClassName="selected" to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
                                    </ul> :
                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link to="/"><span className="glyphicon glyphicon-user"></span> {user.firstName}</Link></li>
                                    <li onClick={logout}><Link to="/"><span className="glyphicon glyphicon-log-out"></span> Logout</Link></li>
                                </ul>
                        }
                    </div>
                </nav>
            </div>
        );
}

function mapState(state) {
    const { authentication } = state;
    const { user } = authentication;
    return { user };
}

const actionCreators = {
    logout: userActions.logout,
}

const connectedHeader = connect(mapState, actionCreators, null, { pure: false })(Header);
export { connectedHeader as Header };