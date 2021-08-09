import React, {Component} from 'react';

class CartItem extends Component {
    removeItem = (id) => {
        this.props.onRemoveItem(id);
    }

    changeAmount = (caseType, id) => {
        this.props.onChangeAmount(caseType, id);
    }

    render() {
        let {item} = this.props;
        return(
            <tr>
                <th scope="row"><img src={item.img} alt="img"/></th>
                <td>
                    <h5>
                        <strong>{item.name}</strong>
                    </h5>
                </td>
                <td>{item.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.qty}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => this.changeAmount('minus',item.id)}>
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => this.changeAmount('plus',item.id)}>
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{item.price * item.qty}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove item" onClick={() => this.removeItem(item.id)}>X</button>
                </td>
            </tr>
        )
    }
}
export default CartItem;