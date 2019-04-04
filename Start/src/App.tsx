import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductSearch from "./components/product-search/search";
import ProductDetailView from "./components/product-search/ProductDetailView";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <ProductSearch />
//         </header>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ProductSearch} />
          <Route path="/search" component={ProductDetailView} />
        </div>
      </Router>
    );
  }
}

//   render() { }
//   return(
//     <Router>
//     <div>
//       <Header />

//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/topics" component={Topics} />
//     </div>
//   </Router>
//   );
// }
export default App;
