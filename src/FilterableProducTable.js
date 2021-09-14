import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
class FilterableProducTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtertext: "", inStockOnly: false
        }
    }
    handleFilterTextChange = (filtertext) => {
        this.setState(
            {
                filtertext: filtertext
            }
        )
    }
    handleInStockChange = (inStockOnly) => {
        this.setState(
            {
                inStockOnly: inStockOnly
            }
        )
    }
    render() {
        return (<div>
            <SearchBar filtertext={this.state.filtertext} inStockOnly={this.state.inStockOnly} onFilterTextChange={this.handleFilterTextChange} onInStockChange={this.handleInStockChange}></SearchBar>
            <ProductTable products={this.props.products} filtertext={this.state.filtertext} inStockOnly={this.state.inStockOnly} ></ProductTable>
        </div>
        );
    }
}

export default FilterableProducTable;