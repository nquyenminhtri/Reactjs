import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {getAllUsers,createNewUserService, deleteUserService, updateUserService} from '../../services/userService';
import ModalUser from './ModalUser';
import ModalUpdateUser from './ModalUpdateUser';
class UserManage extends Component {

    constructor(props){
        super(props);
        this.state = {
            arrUsers:[],
            isOpenModalUser: false,
            isOpenModalUpdateUser: false,
            userUpdate: {}
        }
    }
    async componentDidMount() {
        await this.getAllUsersFromReacte();
    
    }
    getAllUsersFromReacte =async()=>{
        let response = await getAllUsers('ALL');
        if(response && response.errCode === 0){
            this.setState({
                arrUsers:response.users
            })
        }
       
    }
handleAddUser=()=>{
  this.setState({
    isOpenModalUser:true,
  })
}
handleUpdateUser=(user)=>{
    console.log('check user: ',user)
    this.setState({
        isOpenModalUpdateUser:true,
        userUpdate: user,
      })
}
toggleUserModal = ()=>{
    this.setState({
        isOpenModalUser:!this.state.isOpenModalUser,
      })
}
toggleUpdateUser = ()=>{
    this.setState({
        isOpenModalUpdateUser: !this.state.isOpenModalUpdateUser,
    })
}
createNewUser =  async(data) =>{
    try {
        let response = await createNewUserService(data);
        if(response && response.errCode!==0){
            alert(response.errMessage)
        }else {
            await this.getAllUsersFromReacte();
            this.setState({
                isOpenModalUser:false
            })
        }
       
    } catch (e) {
        console.log(e);
    }
   
}
handleDeleteUser = async(user)=>{
  console.log('check user : ',user);
  try {
   let res =  await deleteUserService(user.id);
    if(res && res.errCode === 0){
        await this.getAllUsersFromReacte();
    }else{
        alert(res.errMessage);
    }
  } catch (e) {
    console.log(e);
  }
}
updateUser = async(user)=>{
    try {
        let response = await updateUserService(user.id);
        console.log('checkuser ID: ',user.id);
        console.log('check res: ',response)
        if(response && response.errCode!==0){
            alert(response.errMessage)
        }else {
            await this.getAllUsersFromReacte();
            this.setState({
                isOpenModalUser:false
            })
        }
       
    } catch (e) {
        console.log(e);
    }
}
doEditUser = async (user)=>{
    try {
        let res = await updateUserService(user);
        if(res && res.errCode === 0){
            this.setState({
                isOpenModalUpdateUser: false
            })
            await this.getAllUsersFromReacte();
        }else{
            alert(res.errCode);
        }
    } catch (error) {
        console.log(error);
    }
    
   
}
    render() {
        
        let arrUsers = this.state.arrUsers;
        console.log('check arruser: ',arrUsers);
        return (
            <div className="users-container">
                <ModalUser 
                    isOpen= {this.state.isOpenModalUser}
                    toggleFromParent ={this.toggleUserModal}
                    createNewUser = {this.createNewUser}
                />
                {
                    this.state.isOpenModalUpdateUser && 
                <ModalUpdateUser 
                    isOpen= {this.state.isOpenModalUpdateUser}
                    toggleFromParent ={this.toggleUpdateUser}
                    currentUser = {this.state.userUpdate} 
                    editUser = {this.doEditUser}
                />
                }        
                <div className="title text-center" >Account management</div>
                <div className='mx-1 ' ><button className=' btn btn-primary px-3' onClick={()=>this.handleAddUser()}><i className="fas fa-plus"></i> Add users</button></div>
            <div className='users-table mt-4 mx-3 '>
            <table  className='table' >
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
                <tr key={index}>
                    <td>{item.id}</td>
                <td>{item.username}</td>
    <td>{item.phonenumber}</td>
    <td>{item.role}</td>
    <td>
                    <button className='btn-edit' onClick={()=>this.handleUpdateUser(item)}><i className="fas fa-pencil-alt"></i></button>
                    <button className='btn-delete' onClick={()=>this.handleDeleteUser(item)}><i className="fas fa-trash"></i></button>
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
