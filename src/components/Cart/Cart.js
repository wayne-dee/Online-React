import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../Context';
import CartList from './CartList';
import cartTotals from './CartTotals';  

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {
                        value =>{
                            const {cart} = value;
                            if(cart.length>0){
                                return(
                                    <React.Fragment>
                                    <Title name="your" title="cart" />
                                      <CartColumns />
                                    <CartList value ={value} />
                                    <cartTotals vlaue={value} history={this.props.history}/>
                                    </React.Fragment>
                                     
                                );
                            }
                            else{
                               return(<EmptyCart />);
                            }
                        }
                    }
                </ProductConsumer>
               <div className="cart-footer"></div>
               
            </section>
        )
    }
}
