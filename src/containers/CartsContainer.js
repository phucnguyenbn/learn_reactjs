import React, {Component} from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/index";
import Carts from "../components/layouts/Carts";
import CartItem from "../components/layouts/CartItem";
import CartTotal from "../components/layouts/CartTotal";

class CartsContainer extends Component {
    render() {
        let {carts} = this.props;
        return (
            <Carts>
                {this.showCartItem(carts)}
            </Carts>
        )
    }

    showCartItem(carts){
        let cartTotal = 0; let totalKey = 0;
        let cart_item =  carts.map((item, index) => {
            cartTotal += item.qty * item.price;
            totalKey = index + 1;
            return (
                <CartItem
                    item={item}
                    onChangeAmount={this.props.onChangeAmount}
                    onRemoveItem={this.props.onRemoveItem}
                    key={index}
                />
            )
        });
        let cart_total = <CartTotal cartTotal={cartTotal} key={totalKey}/>
        return [
            cart_item,
            cart_total
        ]
    }
}

const mapStateToProps = (state) => {
    return {
        carts: state.carts,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onRemoveItem: (id) => {
            dispatch(actions.onRemoveItem(id))
        },
        onChangeAmount: (caseType, id) => {
            dispatch(actions.onChangeAmount(caseType, id))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CartsContainer);