import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { render } from "react-dom";
import PublishSubscriberHandler, {
  PubSubEvent
} from "./../../infra/pubSubHandler";

class Filters extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.updateProductList = this.updateProductList.bind(this);
    this.filtersFromProductList = this.filtersFromProductList.bind(this);
    this.clearAllFilters = this.clearAllFilters.bind(this);
    this.state = {
      products: this.props.products,
      totalProducts: this.props.products,
      filters: this.filtersFromProductList(this.props.products)
    };
  }

  componentWillReceiveProps(props: any) {
    this.setState({
      products: props.products,
      totalProducts: props.products,
      filters: this.filtersFromProductList(props.products)
    });
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

  clearAllFilters() {
    PublishSubscriberHandler.raiseEvent(PubSubEvent.ReloadAllItems, {});
  }

  updateProductList(event: React.ChangeEvent<HTMLInputElement>) {
    let tagValue: string = event.target.value;
    let filtersN: string[] = this.state.filters;

    if (filtersN.includes(tagValue)) {
      filtersN = filtersN.filter(element => element === tagValue);
    } else {
      filtersN.push(tagValue);
    }

    console.log("filters" + filtersN);
    this.setState({ filters: filtersN });
    PublishSubscriberHandler.raiseEvent(PubSubEvent.FiltersUpdated, filtersN);
  }

  render() {
    const tagElements = [];
    for (var i = 0; i < this.state.filters.length; i++) {
      tagElements.push(
        <div key={"formElement" + this.state.filters[i]} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            key={this.state.filters[i]}
            value={this.state.filters[i]}
            id={this.state.filters[i]}
            onChange={this.updateProductList}
          />
          <label className="form-check-label">{this.state.filters[i]}</label>
        </div>
      );
    }

    return (
      <div className="card bg-light mb-3">
        {tagElements}
        <div className="mb-1" />
        <div key={"formElement" + "clearall"} className="form-check">
          <button
            className="form-check-input"
            key="clearall"
            value="clearall"
            id="clearall"
            onClick={this.clearAllFilters}
          />
          <label className="form-check-label">Clear All</label>
        </div>
      </div>
    );
  }
}

export default Filters;
