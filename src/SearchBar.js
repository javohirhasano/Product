import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value)
    }
    handleInStockChange = (e) => {
        this.props.onInStockChange(e.target.value)
    }
    render() {
        return (
            <div className="container mt-4">
                <input className="pe-5 bg-warning text-white" type="text" placeholder="Izlash.." value="" value={this.props.inputText} onChange={this.handleFilterTextChange} />
                <Button className="text-danger"><SearchIcon></SearchIcon></Button>
                <p className="text-dark">
                    <input type="checkbox" id="onlyInStock" name="onlyInStock" checked={this.props.inStockOnly} onChange={this.handleInStockChange} />
                    <label for="onlyInStock" className="text-primary ms-3">Omordagi mavjud bulgan mahsulotlar</label>
                </p>
            </div>
        );
    }
}

export default SearchBar;