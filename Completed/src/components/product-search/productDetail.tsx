import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { render } from "react-dom";

class ProductDetail extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { product: this.props.product };
  }

  render() {
    const tagElements = [];
    const tags = this.state.product.tags;
    for (var i = 0; i < tags.length; i++) {
      tagElements.push(
        <div className="btn-group" role="group" key={tags[i] + "buttonGroup"}>
          <button
            type="button"
            className="btn btn-outline-secondary"
            key={tags[i]}
          >
            {tags[i]}
          </button>
          <pre> </pre>
        </div>
      );
    }
    const pstyle = {
      maxHeight: "200px",
      maxWidth: "100px"
    };

    return (
      <div className="card bg-light mb-3" key={this.state.product.name}>
        <img
          className="card-img-top img-fluid img-thumbnail"
          src={this.state.product.imageURL}
          style={pstyle}
          key={this.state.product.name}
          alt="Product URL"
        />
        <div className="card-body">
          <h5 className="card-text">Name - {this.state.product.name}</h5>
          <p className="card-text">Price - {this.state.product.price}</p>
          <p className="card-text">{this.state.product.description}</p>
          <hr />
          <div>
            Tags :<pre> </pre>
            {tagElements}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
