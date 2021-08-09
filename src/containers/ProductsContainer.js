import React, {Component} from 'react';
import { connect } from "react-redux";
import * as actions from '../actions/index';
import Products from "../components/layouts/Products";
import Product from "../components/layouts/Product";

class ProductsContainer extends Component {

    render() {
        let {products} = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        )
    }

    showProduct(products){
        var { onAddToCart } = this.props;
        return products.map((product, index) => {
            return (
                <Product product={product} index={index} onAddToCart={onAddToCart} key={index} />
            )
        })
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch, props = '') => {
    return {
        onAddToCart: (item) => {
            dispatch(actions.onAddToCart(item));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ProductsContainer);