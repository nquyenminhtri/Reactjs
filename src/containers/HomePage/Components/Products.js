import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Products.scss';
import {getAllProducts} from '../../../services/productService';

class Product extends Component {

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
        return (
            
            <div className='container-product'>
                
                <div className="content-product">
                    <div className='description'>
                    <h2>Sản Phẩm</h2>
                    <button>Tất cả</button>
                    </div>
                    
            {
                arrProducts && arrProducts.map((item,index)=>{
                    return(
                        
                        <div key={index} className='child-product'>
                            <a href='/detail'>
                                <div className='img-product'><img src='' /></div>
                                <div className='title-price'>
                                    <h5>{item.name}</h5>
                                    <span>{item.description}</span>
                                    <h3>{item.price}</h3>
                                </div>
                            </a>
                        </div>
                        
                        
                        
                    )
                })
            }
            
                
            </div>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
