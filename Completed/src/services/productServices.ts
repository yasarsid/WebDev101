import Product from "./../contracts/Product";

export class ProductService {
  public static GetProducts(): Promise<Product[]> {
    return new Promise<Product[]>((resolve, reject) => {
      resolve(Product.GetMockProducts());
    });
  }

  public static updateProduct(product: Product): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve({ status: 200 });
    });
  }

  public static queryProductUpdates(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve(Product.GetMockProducts());
    });
  }

  public static errorService(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      reject({ error: "mock error" });
    });
  }
}

export default ProductService;
