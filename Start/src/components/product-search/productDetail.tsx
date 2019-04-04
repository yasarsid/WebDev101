import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { render } from "react-dom";

class ProductDetail extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { product: this.props.product };
  }

  render() {
    return <div className="card bg-light mb-3">Product List</div>;
  }
}

export default ProductDetail;
