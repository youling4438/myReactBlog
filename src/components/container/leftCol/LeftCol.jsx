import * as React from 'react';
import Header from './header/Header';
import './LeftCol.css';

class LeftCol extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <div className = "left-col" >
                <div className = "top" />
                <div className = "bottom" >
                    <Header />
                </div>
            </div>
        );
    }
}

export default LeftCol;
