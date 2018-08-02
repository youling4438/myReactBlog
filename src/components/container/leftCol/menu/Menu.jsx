import * as React from 'react';
import './iconfont.css';
import './Menu.css';


class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    };

    render(){
        return (
            <div className= "Menu">
                <li className= "homePage">
                    <a href='/'>主页</a>
                </li>
                <li>
                    <ul className= "linkLists">
                        <li><a href='/'>所有文章</a></li>
                        <li><a href='/'>友链</a></li>
                        <li><a href='/'>关于我</a></li>
                    </ul>
                </li>
                <li>
                    <ul className="iconLists">
                        <li><a href='/'><span><i className="iconfont icon-GitHub"></i></span></a></li>
                        <li><a href='/'><span><i className="iconfont icon-weibo"></i></span></a></li>
                        <li><a href='/'><span><i className="iconfont icon-zhihu"></i></span></a></li>
                        <li><a href='/'><span><i className="iconfont icon-icon-email"></i></span></a></li>
                    </ul>
                </li>
            </div>
        );
    }
}

export default Menu;
