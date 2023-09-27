import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions/appActions';
class HomeBanner extends Component {

    constructor(){
        super();
        this.state={
           
            language:'en',
        }
    }
    handleSearch=()=>{
        alert('Search')
    }
    
    changeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
        this.setState({

        })
    }
    render() {
       
        
        return (
            <React.Fragment>
            
            <div className="home-header-banner">
                
                <div className="content-up">
                    <div className='title1'>FOCUS STORE</div>
                    <div className='title2'><FormattedMessage id="home-header.title" /></div>
                    <div className='search'>
                        <i className="fas fa-search" onClick={()=>{this.handleSearch()}}></i>
                        <input type='text' placeholder='Search'/>
                    </div>
                </div>
                <div className='content-down'>
                    <div className='options'>
                        
                        <div className='option-child'>
                            <div className='icon-background'>
                                <div className='icon-child icon-motobike'></div>
                            </div>
                            <div className='text-child'><FormattedMessage id="home-header.motorcycleToys" /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-background'>
                                <div className='icon-child icon-spare-parts'></div>
                            </div>
                            <div className='text-child'><FormattedMessage id="home-header.motobikeAccessories" /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-background'>
                                <div className='icon-child icon-tire'></div>
                            </div>
                            <div className='text-child'><FormattedMessage id="home-header.tire" /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-background'>
                                <div className='icon-child icon-motorcycle-oil'> </div>
                            </div>
                            <div className='text-child'><FormattedMessage id="home-header.motorOil" /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-background'>
                                <div className='icon-child icon-biker-accessories'></div>
                            </div>
                            <div className='text-child'><FormattedMessage id="home-header.accessoriesForMotorcyclists" /></div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language:state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux:(language)=>dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeBanner);
