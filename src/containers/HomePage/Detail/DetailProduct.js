import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../HomeHeader';
import './DetailProduct.scss';
class DetailProduct extends Component {

    render() {
        
        return (
            <div className='detail-product-container'>
                <div className='detail-product-header'>
                <HomeHeader/>
                </div>
              
                <div className='detail-product-content'>
                    <h1>Chi tiết sản phẩm</h1>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);