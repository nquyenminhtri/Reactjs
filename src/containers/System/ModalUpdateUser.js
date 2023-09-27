
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import _ from 'lodash';
class ModalUpdateUser extends Component {

   constructor(props){
    super(props);
    this.state = {
        id:'',
        username:'',
        phonenumber:'',
        role:1,
    }
   }
    componentDidMount() {
        let user = this.props.currentUser;
        if(user && !_.isEmpty(user)){
            this.setState({
                id:user.id,
                username: user.username,
                phonenumber: user.phonenumber,
                role: user.role,
            });
        }
        console.log('Didmount edit modal ', this.props.currentUser)
    }
    toggle = ()=>{
        this.props.toggleFromParent();
    }
    handleOnChangeInput = (event,id)=>{
        this.state[id] = event.target.value;
        this.setState({
            ...this.state
        },()=>{
            console.log('check bad state: ',this.state)
        })

        let copyState = {...this.state};
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        },()=>{
            console.log('check good state: ',this.state)
        })
    }
    checkValidateInput = ()=>{
        let isValid = true;
        let arrInput = ['username','phonenumber','role'];
        for(let i = 0; i<arrInput.length;i++){
            console.log(this.state[arrInput[i]],arrInput[i])
            if(!this.state[arrInput[i]]){
                isValid = false;
                alert('Missing parameter: '+arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleSaveUser = ()=>{
        let isValid = this.checkValidateInput();
        if(isValid === true){
            this.props.editUser(this.state);
        }
    }
    
    render() {
        return (
            <Modal isOpen ={this.props.isOpen} toggle={()=>this.toggle()} className={'modal-user-container'} size="lg" >
            <ModalHeader toggle={()=>{this.toggle()}}>Edit user</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Username</label>
                            <input type= "text" onChange={(event)=>{this.handleOnChangeInput(event,"username")}} value= {this.state.username} disabled />
                        </div>
            
                        <div className="input-container">
                            <label>PhoneNumber</label>
                            <input type= "text" onChange={(event)=>{this.handleOnChangeInput(event,"phonenumber")}} value= {this.state.phonenumber}/>
                        </div>
                        <div className="input-container">
                            <label>Role</label>
                            <select value={this.state.role} onChange={(event)=>{this.handleOnChangeInput(event,"role")}}>
                                <option value="1">Staff</option>
                                <option value="2">Admin</option>
                            </select>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={()=>{this.handleSaveUser()}}>Save</Button>{''}
                    <Button color="secondary"  onClick={()=>{this.toggle()}}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateUser);


