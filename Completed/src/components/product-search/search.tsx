import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./../../App.css";

class ProductSearch extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = { value: "Search Product ..." };

    this.handleChange = this.handleChange.bind(this);
    this.Search = this.Search.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.currentTarget.value });
  }

  Search(event: React.MouseEvent<HTMLElement>) {
    if (this.state.value !== "" && this.state.value !== "Search Product ...") {
      this.props.history.push("search/?q=" + this.state.value);
    }
    event.preventDefault(); // event.stopPropagation();
  }

  render() {
    const header = {
      backgroundColor: "#282c34",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white"
    };

    return (
      <div style={header}>
        <form className="form-horizontal col-sm-8">
          <div className="form-group form-group-lg">
            <label className=" control-label">Product Search Bar</label>
            <div className="">
              <input
                className="form-control"
                type="text"
                id="searchBar"
                placeholder="Search Product ..."
                onChange={event => this.handleChange(event)}
              />
              <br />
              <button
                className="btn btn-lg btn-primary"
                onClick={event => this.Search(event)}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductSearch;
