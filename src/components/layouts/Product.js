import React, {Component} from 'react';

class Product extends Component {
    render() {
        let { product, index } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r" key={index}>
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.img} className="img-fluid" alt=""/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating"
                            dangerouslySetInnerHTML={{__html: this.rating(product.rate)}}>
                        </ul>
                        <p className="card-text">{product.desc}</p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient"
                                   data-toggle="tooltip"
                                   data-placement="top"
                                   title=""
                                   data-original-title="Add to Cart"
                                   onClick={() => this.AddToCart(index)}
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    rating(rate){
        let rate_text = '';
        for (let i = 1; i <= 5; i++){
            if (i <= rate){
                rate_text += '<i class="fa fa-star"></i>'
            } else {
                rate_text += '<i class="fa fa-star-o"></i>'
            }
        }
        return rate_text;
    }

    AddToCart = (index) => {
        this.props.onAddToCart(index);
    }
}

export default Product;