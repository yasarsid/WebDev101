import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { render } from "react-dom";
import * as Product from "./../../contracts/Product";
import ProductDetail from "./productDetail";
import Filters from "./filters";
import PublishSubscribeHandler, {
  PubSubEvent
} from "../../infra/pubSubHandler";
import ProductRestService from "../../services/productRestServices";
import { setTimeout } from "timers";

const queryString = require("query-string");

class ProductDetailView extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = { products: [] };

    var parsed = queryString.parse(this.props.location.search);
    console.log(parsed.q);
    this.onFiltersUpdated = this.onFiltersUpdated.bind(this);
    this.onServiceSuccessful = this.onServiceSuccessful.bind(this);
    this.onServiceError = this.onServiceError.bind(this);
    this.onServiceError = this.onServiceError.bind(this);

    PublishSubscribeHandler.register(
      PubSubEvent.FiltersUpdated,
      this.onFiltersUpdated
    );

    PublishSubscribeHandler.register(PubSubEvent.ReloadAllItems, () => {
      ProductRestService.GetProducts(
        this.onServiceSuccessful,
        this.onServiceError
      );
    });
  }

  componentDidMount() {
    ProductRestService.GetProducts(
      this.onServiceSuccessful,
      this.onServiceError
    );
  }

  onServiceSuccessful(products: Product.Product[]) {
    console.log("Successful service call");
    console.log(products);
    this.setState({ products: products });
  }

  onServiceError(error: any) {
    console.log("error service call");
    console.log(error);
    alert("service call failed !!!");
  }

  longPollingService() {
    setTimeout(() => {
      ProductRestService.queryProductUpdates(
        this.onServiceSuccessful,
        this.onServiceError
      );
    }, 5000);
  }

  onFiltersUpdated(tagSelected: string[]) {
    if (tagSelected !== undefined || tagSelected !== []) {
      const products: Product.Product[] = this.state.products;
      let filteredProducts: Product.Product[] = [];

      for (var i = 0; i < tagSelected.length; i++) {
        for (var j = 0; j < products.length; j++) {
          if (products[j].tags.includes(tagSelected[i])) {
            if (!filteredProducts.includes(products[j])) {
              filteredProducts.push(products[j]);
            }
          }
        }
      }
      this.setState({ products: filteredProducts });
    } else {
      this.setState({ products: Product.Product.GetMockProducts() });
    }
  }

  render() {
    console.log("updating");
    const productViews = [];
    for (var i = 0; i < this.state.products.length; i++) {
      productViews.push(
        <ProductDetail
          key={i + "ProductDetail"}
          product={this.state.products[i]}
        />
      );
    }

    return (
      <div className="row">
        <div className="col-md-8">
          <h1>Product Details</h1>
          {productViews}
        </div>
        <div className="col-md-4">
          <h1>Filters</h1>
          <Filters products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default ProductDetailView;
