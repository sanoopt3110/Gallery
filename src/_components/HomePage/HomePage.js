import React from 'react';
import './HomePage.css';
import { Header } from '../Header';

class HomePage extends React.Component {

    componentDidMount() {
       
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export { HomePage };