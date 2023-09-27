import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Promotion from './Section/Promotion';
import Product from './Components/Products';
import HomeFooter from './HomeFooter';
import HomeBanner from './HomeBanner';
import './HomePage.scss';

class HomePage extends Component {

    render() {
        
        return (
            <div className='home-page'>
                <HomeHeader />
                <HomeBanner/>
                <Promotion/>
                <Product/>
                <HomeFooter/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);