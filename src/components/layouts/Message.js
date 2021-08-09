import React, {Component} from 'react';
import { connect } from "react-redux";

class Message extends Component {
    render() {
        return (
            <h3 className="message">
                <span className="badge amber darken-2">Mua Hàng Thành Công !</span>
            </h3>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps,null) (Message);