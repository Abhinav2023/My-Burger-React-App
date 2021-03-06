import React from 'react';
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
class Checkout extends React.Component{
    state={
        ingredients:{
            salad: 1,
            meat: 1,
            cheese:1,
            bacon: 1
        }
    }

    componentDidMount(){
        const query=new URLSearchParams(this.props.location.search);
        const ingredients={};
        for(let param of query.entries()){
            ingredients[param[0]]=+param[1];
        }
        this.setState({ingredients: ingredients})
    }

    checkoutCancelled=()=>{
        this.props.history.goBack();
    }

    checkoutContinued=()=>{
        this.props.history.replace('/checkout/contact-data')
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                    checkoutCancelled={this.checkoutCancelled}
                    checkoutContinued={this.checkoutContinued}
                    ingredients={this.state.ingredients} />
                    <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
            </div>
        )
    };
}

export default Checkout