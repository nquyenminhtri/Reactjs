import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {getAllProducts} from '../../services/productService';
class ProductManage extends Component {

    constructor(props){
        super(props);
        this.state={
            arrProducts:[],
        }
    }
    async componentDidMount() {
        await this.getAllProductFromReact();
    }
    getAllProductFromReact= async()=>{
        let response = await getAllProducts('ALL');
        if(response && response.errCode === 0)
        {
            this.setState({
                arrProducts:response.products
            })
        }
    }


    render() {
        let arrProducts = this.state.arrProducts;
        console.log('check arrProduct: ',arrProducts)
        return (
            <div>
                <div className="text-center" >Manage products</div>
                <div className='users-table mt-4 mx-3 '>
            <table  className='table' >
            <tbody>
  <tr>
  <th>id</th>
    <th>Name</th>
    <th>Description</th>
    <th>Price</th>
    <th>image</th>
    <th>category</th>
    <th>origin</th>
    <th>availability</th>
    <th>Action</th>
  </tr>
                {                    
        arrProducts && arrProducts.map((item,index) =>{
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.image_url}</td>
                    <td>{item.category}</td>
                    <td>{item.origin}</td>
                    <td>{item.availability}</td>
                    <td>
                    <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                    <button className='btn-delete'><i className="fas fa-trash"></i></button>
                    </td>
                </tr>
            )
        })
    }
    </tbody>
</table>
            </div>
            </div>
            
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
