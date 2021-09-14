import React, { Component } from 'react';
import ProductRow from "./ProductRow"
class ProductTable
    extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const filtertext = this.props.filtertext
        const inStockOnly = this.props.inStockOnly
        const rows = []
        this.props.products.forEach((products) => {
            if (products.Name.indexOf(filtertext.toLowerCase()) === -1) {
                return;
            }
            if (inStockOnly && !products.stocked) {
                return;
            }
            rows.push(<ProductRow products={products} key={products.name}></ProductRow>)
        });
        return (
            <div className="container">
                <table>
                    <thead>
                        <tr className="">
                            <th align="left me-4">Mahsulot Nomi </th>
                            <th align="right ">Narxi </th>
                        </tr >
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable
