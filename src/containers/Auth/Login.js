import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
// import { FormattedMessage } from 'react-intl';
import { Alert, InputGroupText } from 'reactstrap';
import {handleLoginApi}  from '../../services/userService';

//import images
import fbImg from '../../assets/images/facebook.png';
import ggImg from '../../assets/images/google.png';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errMessage: '',
            isShowPassWord:''
        }
    }
handleOnChangeUsername = (event) =>{
    this.setState({
        username:event.target.value,
    })
}
handleOnChangePassword = (event) =>{
    this.setState({
        password:event.target.value,
    })
}
handleLogin= async()=>{
   this.setState({
    errMessage:''
   })
    try {
        let data = await handleLoginApi(this.state.username,this.state.password);
        if(data && data.errCode !==0){
            this.setState({
                errMessage:data.message
            })
        }
        if(data && data.errCode === 0 ){
            this.props.userLoginSuccess(data.user)
            console.log('login success')
        }
    } catch (e) {
        if(e.response){
            if(e.response.data){
                this.setState({
                    errMessage:e.response.data.message
                })
            }
        }
    }
}
handleShowHidePassword = ()=>{
    this.setState({
        isShowPassWord:!this.state.isShowPassWord
    })
}
   render() {
        
        return (
           <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder='Enter your username' value={this.state.username} onChange={(event)=> this.handleOnChangeUsername(event)}></input>
                        </div>
                        <div className="col-12 form-group login-input" >
                            <label>Password</label>
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPassWord ? 'text': 'password'} className='form-control' placeholder='Enter your password' value={this.state.password} onChange={(event)=> this.handleOnChangePassword(event)}></input>
                                <span onClick={() => { this.handleShowHidePassword()}}>
                                    <i className={this.state.isShowPassWord ? "far fa-eye" : "fas fa-eye-slash" }></i>
                                </span>
                                
                            </div>
                        </div>
                        <div className='col-12' style={{color:'red',textAlign:'center' }}>{this.state.errMessage}</div>
                        <div className="col-12 ">  <button className='btn-login'onClick={()=>{this.handleLogin()}} >Login</button></div>
                        
                        <div className="col-12 forgot-password-register">
                            <div className="forgot-password"><a href=''>Forgot your password</a></div>
                            <div className="register"><a href='/register'>Register</a></div>
                        </div>
                        <div className="login-with"><span>Or</span></div>
                        <div className="col-12 login-icon-container">
                        
                            <div className="login-icon fb-icon">
                                <img src={fbImg} alt="fb" />
                            </div>
                            <div className="login-icon gg-icon">
                                <img src={ggImg} alt="gg" />
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) =>dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
