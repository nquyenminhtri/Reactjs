import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {getAllUsers} from '../../services/userService';
import ModalUser from './ModalUser';
class UserManage extends Component {

    constructor(props){
        super(props);
        this.state = {
            arrUsers:[],
            isOpenModalUser: false,
        }
    }
    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if(response && response.errCode === 0){
            this.setState({
                arrUsers:response.users
            },()=>{
                console.log('check state user ', this.state.arrUsers);
            })
            console.log('check state user 1', this.state.arrUsers);
            
        }
        console.log('let user form node.js :',response);
    
    }
handleAddUser=()=>{
  this.setState({
    isOpenModalUser:true,
  })
}

toggleUserModal = ()=>{
    this.setState({
        isOpenModalUser:!this.state.isOpenModalUser,
      })
}
createNewUser = () =>{

}
handleDeleteUser = ()=>{

}

    render() {
        
        let arrUsers = this.state.arrUsers;

        return (
            <div className="users-container">
                <ModalUser 
                    isOpen= {this.state.isOpenModalUser}
                    toggleFromParent ={this.toggleUserModal}
                    createNewUser = {this.createNewUser}
                />
                <div className="title text-center" >Account management</div>
                <div className='mx-1 ' onClick={()=>this.handleAddUser()}><button className=' btn btn-primary px-3'><i className="fas fa-plus"></i> Add users</button></div>
            <div className='users-table mt-4 mx-3'>
            <table id="customers">
            <tbody>
  <tr>
  <th>id</th>
    <th>Username</th>
    <th>PhoneNumber</th>
    <th>Role</th>
    <th>Action</th>
  </tr>

    {
        arrUsers && arrUsers.map((item,index) =>{
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                <td>{item.username}</td>
    <td>{item.phonenumber}</td>
    <td>{item.role}</td>
    <td>
                    <button className='btn-edit' ><i className="fas fa-pencil-alt"></i></button>
                    <button className='btn-delete' onClick={()=>this.handleDeleteUser()}><i className="fas fa-trash"></i></button>
                </td>
                </tr>
            )
        })
    }
</tbody>
</table>
            </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
