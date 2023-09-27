
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
class ModalUser extends Component {

   constructor(props){
    super(props);
    this.state = {
        username:'',
        passWord:'',
        phonenumber:'',
        role:1,

    }
   }
    componentDidMount() {
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
            console.log('check bad state: ',this.state)
        })
    }
    checkValidateInput = ()=>{
        let isValid = true;
        let arrInput = ['username','passWord','phonenumber','role'];
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
    handleAddUser = () =>{
        let isValid = this.checkValidateInput();
        if(isValid === true){
            this.props.createNewUser(this.state);
        }
        this.checkValidateInput();
        this.clearForm();
        console.log('data modal: ',this.state);
    }
    clearForm = () => {
        this.setState({
          username: '',
          passWord: '',
          phonenumber: '',
          role: 1,
        });
      };
    render() {
        console.log('check child props',this.props);
        console.log('check child open modal',this.props.isOpen);
        return (
            <Modal isOpen ={this.props.isOpen} toggle={()=>this.toggle()} className={'modal-user-container'} size="lg" >
<ModalHeader toggle={()=>{this.toggle()}}>Create user</ModalHeader>

<ModalBody>
    <div className="modal-user-body">
        <div className="input-container">
            <label>Username</label>
            <input type= "text" onChange={(event)=>{this.handleOnChangeInput(event,"username")}}
            value= {this.state.username} />
        </div>
        <div className="input-container">
            <label>passWord</label>
            <input type= "passWord" onChange={(event)=>{this.handleOnChangeInput(event,"passWord")}}
            value= {this.state.passWord}/>
        </div>
        <div className="input-container">
            <label>PhoneNumber</label>
            <input type= "text" onChange={(event)=>{this.handleOnChangeInput(event,"phonenumber")}}
            value= {this.state.phonenumber}/>
        </div>
        <div className="input-container">
            <label>Role</label>
            <select value={this.state.role}
            onChange={(event)=>{this.handleOnChangeInput(event,"role")}}>
                <option value="1">Staff</option>
                <option value="2">Admin</option>
            </select>
        </div>
        </div>
</ModalBody>
<ModalFooter>
    <Button color="primary" onClick={()=>{this.handleAddUser()}}>Add</Button>{''}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


