import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
// import { FormattedMessage } from 'react-intl';
import { InputGroupText } from 'reactstrap';
import {handleLoginApi}  from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errMessage: ''
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
                    <input type="password" className='form-control' placeholder='Enter your password' value={this.state.password} onChange={(event)=> this.handleOnChangePassword(event)}></input>
                </div>
               <div className="col-12 ">  <button className='btn-login'onClick={()=>{this.handleLogin()}} >Login</button></div>
              <div className='col-12' style={{color:'red'}}>{this.state.errMessage}</div>
                <div className="col-12">
                    <span>Forgot your password</span>
                </div>
                <div className="col-12"></div>
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
