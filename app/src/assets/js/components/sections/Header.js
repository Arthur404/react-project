import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

import logo from '../../../img/kado-logo.png'
import menuBtn from '../../../img/icon/menu.svg'
import cancelBtn from '../../../img/icon/cancel.svg'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        const navItem = [{
            name: 'Home',
            url: '/'
        }, {
            name: 'Blog',
            url: '/blog'
        }, {
            name: 'About',
            url: '/about'
        }, {
            name: 'Contacts',
            url: '/contacts'
        }];

        return <header className='main-header'>
            <h1 className='logo'>
                <Link to="/">
                    <img src={logo} alt="Kado"/>
                    Kado
                </Link>
            </h1>
            <button onClick={this.toggleMenu} className='nav-btn'><img src={this.state.isToggleOn ? menuBtn : cancelBtn} alt="nav"/></button>
            <nav className={this.state.isToggleOn ? 'nav-menu' : 'nav-menu active'}>
                <ul>
                    {
                        navItem.map((item, i) => (
                            <li key={i}><Link to={item.url}>{item.name}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    }
}

export default Header;