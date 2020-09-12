import React from 'react';

class CartItem extends React.Component
{
    // constructor() {
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         img: ''
    //     }
    //     //this.increaseQuantity = this.increaseQuantity.bind(this);

    // }
    //eventHandler
    increaseQuantity=() =>{
        //console.log('this', this.state);
        // this.setState({
        //     qty:this.state.qty+=1
        // });

        this.setState((prevState) => {
            return{
                qty:prevState.qty+1
            }
        });
    }

    decreaseQuantity = () => {
        

        this.setState((prevState) => {
           
            const {qty} =this.state;

            if(qty==0)
                return;

            return {
               qty:qty-1
            }
        });
    }

    render()
    {
        //const { price, title, qty } = this.state;
        const { price, title, qty } = this.props.product;
        return(

            <div className="cart-item">

                <div className="left-block">
                    <img style={styles.image} />
                </div>
            

                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{ color: '#777' }}>Rs.{price}</div>
                    <div style={{ color:'#777' }}>Qty:{qty}</div>
                </div>

                <div className="cart-item-actions">
                    <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" onClick={this.increaseQuantity}></img>
                    <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992683.svg" onClick={this.decreaseQuantity}></img>
                    <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg"></img>
                </div>

            </div>
        
        );
    }
};

const styles={
    image:
    {
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;