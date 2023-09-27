import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Register.scss';
// import { FormattedMessage } from 'react-intl';
import { InputGroupText } from 'reactstrap';

class Register extends Component {
    
   render() {
        
        return (
           <div> <h1>Hello Register</h1></div>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
