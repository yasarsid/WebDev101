import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Product from "./../../contracts/Product";
import ProductDetail from "./productDetail";
import Filters from "./filters";

const queryString = require("query-string");

class ProductDetailView extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { products: [] };
    var parsed = queryString.parse(this.props.location.search);
  }

  render() {
    return <div>Will display the Products and Filters here</div>;
  }
}

export default ProductDetailView;
