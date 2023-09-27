import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {

    constructor(){
        super();
        this.state={
            isshownenubar:'',
            language:'en',
        }
    }
    handleSearch=()=>{
        alert('Search')
    }
    handleShowMenuBar=()=>{
        this.setState(prevState => ({
            isshownenubar: !prevState.isshownenubar,
        }));
        
    }
    changeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
        this.setState({

        })
    }
    render() {
       
        
        return (
            <React.Fragment>
                
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                        <div className="menu">
                            <i className="fas fa-bars " data-isshownenubar={this.state.isshownenubar ? "true" : "false"} onClick={this.handleShowMenuBar}></i>
                            
                                <div className='menu-bar' style={{display:this.state.isshownenubar ? "block": "none"}}>
                                    <div className='child-menu-bar'>
                                        <a href='/home'><FormattedMessage id="home-header.home"/></a>
                                    </div>
                                    <div className='child-menu-bar'>
                                        <a href='#'><FormattedMessage id="home-header.product"/></a>
                                    </div>
                                    <div className='child-menu-bar'>
                                        <a href='#'><FormattedMessage id="home-header.promotion"/></a>
                                    </div>
                                </div>
                            
                        </div>
                        <div className="header-logo"></div>
                    </div>
                    <div className="center-content">
                        <div className="child-content">
                            <div><b><FormattedMessage id="home-header.home"/></b></div>
                            <div></div>
                        </div>
                        <div className="child-content">
                            <div><b><FormattedMessage id="home-header.product"/></b></div>
                            <div></div>
                        </div>
                        <div className="child-content">
                            <div><b><FormattedMessage id="home-header.promotion" /></b></div>
                            <div></div>
                        </div>
                        <div className="child-content">
                            <div><b><FormattedMessage id="home-header.cart" /></b></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="container-right-content">
                        <div className="child-content">
                            <a href='/login'>
                                <div><b><i className="far fa-user"></i></b></div><FormattedMessage id="home-header.login" />
                            </a>
                        </div>
                        <div className="child-content">
                            <a href= "/#">
                                <div><b><i className="far fa-question-circle"></i></b></div><FormattedMessage id="home-header.support" />
                            </a>
                        </div>
                        </div>
                        <div className={this.props.language === LANGUAGES.VI ? "language-vi active" :"language-vi" }><span onClick={()=>this.changeLanguage(LANGUAGES.VI)}>VI</span></div>
                        <div className={this.props.language === LANGUAGES.EN ? "language-en active" :"language-en" }><span onClick={()=>this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                    </div>
                </div>
            </div>
            
            {/* <div className="home-header-banner">
                
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
            </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
