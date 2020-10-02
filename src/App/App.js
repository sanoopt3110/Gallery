import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { HomePage } from '../_components/HomePage';
import { LoginPage } from '../_components/LoginPage';
import { RegisterPage } from '../_components/RegisterPage';
import { ImageGallery, ImageGalleryEdit } from  '../_components/ImageGallery';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="">
                <div className="">
                    <div className="">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <HomePage>
                                    <Route exact path="/" component={ImageGallery} />
                                    <Route path="/login" component={LoginPage} />
                                    <Route path="/register" component={RegisterPage} />
                                    <Route path="/edit-image-gallery" component={ImageGalleryEdit} />
                                </HomePage>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };