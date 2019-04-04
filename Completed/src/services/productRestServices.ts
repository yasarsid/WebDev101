import Product from "./../contracts/Product";

export class ProductRestService {
  public static GetProducts(
    onSuccessfulCallback: Function,
    onFailureCallback: Function
  ): Promise<Response> {
    return fetch("http://localhost:4000/product", { mode: "cors" }).then(
      response => {
        console.log(response);
        return response
          .json()
          .then(value => onSuccessfulCallback(value))
          .catch(error => onFailureCallback(error));
      }
    );
  }

  public static queryProductUpdates(
    onSuccessfulCallback: Function,
    onFailureCallback: Function
  ): Promise<Response> {
    return fetch("http://localhost:4000/product", { mode: "no-cors" }).then(
      response => {
        return response
          .json()
          .then(value => onSuccessfulCallback(value))
          .catch(error => onFailureCallback(error));
      }
    );
  }

  public static updateProduct(
    product: Product,
    onSuccessfulCallback: Function,
    onFailureCallback: Function
  ): Promise<Response> {
    return fetch("http://localhost:4000/product/update", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(product)
    }).then(response => {
      return response
        .text()
        .then(value => onSuccessfulCallback(JSON.parse(value)))
        .catch(error => onFailureCallback(error));
    });
  }

  public static errorService(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      reject({ error: "mock error" });
    });
  }
}

export default ProductRestService;
