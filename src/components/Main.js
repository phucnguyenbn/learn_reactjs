import React, {Component} from 'react';
import Message from "./layouts/Message";
import { connect } from "react-redux";
import ProductsContainer from "../containers/ProductsContainer";
import CartsContainer from "../containers/CartsContainer";

class Main extends Component {
    render() {
        let {carts} = this.props;

        return (
            <main id="mainContainer">
                <div className="container">

                    <section className="section">
                        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                        <ProductsContainer />
                    </section>

                    {(carts.length) ? <Message /> : '' }

                    {(carts.length) ? <CartsContainer /> : '' }
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carts: state.carts,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);