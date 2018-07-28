import * as React from 'react';
import './Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    };

    render(){
        return (
            <div id ="header">
                <a>
                    <div className = "img"/>
                </a>
                <h3><a href="/">zhangqi</a></h3>
                <p>生命中的美好光芒，靠的都是坚持</p>
            </div>
        );
    }
}

export default Header;
