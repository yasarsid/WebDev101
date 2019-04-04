import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Filters extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.filtersFromProductList = this.filtersFromProductList.bind(this);
    this.state = {
      products: this.props.products,
      totalProducts: this.props.products,
      filters: this.filtersFromProductList(this.props.products)
    };
  }

  filtersFromProductList(products: any): string[] {
    const tags: string[] = [];
    for (var i = 0; i < products.length; i++) {
      for (var j = 0; j < products[i].tags.length; j++) {
        if (!tags.includes(products[i].tags[j])) {
          tags.push(products[i].tags[j]);
        }
      }
    }
    return tags;
  }

  render() {
    return <div className="card bg-light mb-3">Filters</div>;
  }
}

export default Filters;
