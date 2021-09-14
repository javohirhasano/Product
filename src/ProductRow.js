import React, { Component } from 'react';
class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const products = this.props.products;
        const name = products.stocked ? products.Name :
            <span style={{ color: "red" }
            }>{products.Name}</span >
        return (
            <tr>
                <td>{name}</td>
                <td className="text-primary">{products.price}</td>
            </tr>
        );
    }
}

export default ProductRow;