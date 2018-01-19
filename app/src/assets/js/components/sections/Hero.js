import React, { Component } from 'react'
import Header from './Header'

import './Hero.scss'

class Hero extends Component {
    render() {
        return <section className='hero'>
            <div className='container'>
                <Header/>
                <div className="welcome">
                    <h2>Welcome to {this.props.page}</h2>
                    <p>Precise measurements and point layout with Microsoft Hololens. For MEP engineers and BIM  specialists</p>
                    <a className='btn' href="">Explore Kado</a>
                </div>
            </div>
        </section>
    }
}

export default Hero;