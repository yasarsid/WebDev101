export class Product {
  name: string;
  description: string;
  imageURL: string;
  price: number;
  tags: string[];

  public constructor(
    name: string,
    description: string,
    imageURL: string,
    price: number,
    tags: string[]
  ) {
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.price = price;
    this.tags = tags;
  }

  public static GetMockProducts(): Product[] {
    let productArray: Product[] = [];
    productArray.push(
      new Product(
        "Apple iPhone X (64GB) - Space Grey",
        "iPhone X features a 5.8-inch Super Retina display with HDR and True Tone. An all-screen design and a surgical-grade stainless steel band. Charges wirelessly. Resists water and dust. 12MP dual cameras with dual optical image stabilization. TrueDepth camera with Portrait mode and Portrait Lighting. Face ID lets you unlock and use Apple Pay with just a glance. Powered by the A11 Bionic chip, iPhone X supports augmented reality experiences in games and apps. And iOS 12—the most advanced mobile operating system—with powerful new tools that make iPhone more personal than ever.",
        "../iphonex.jpg",
        74999,
        ["IPhone", "phone", "apple"]
      )
    );
    productArray.push(
      new Product(
        "Samsung Galaxy Note 8 (Maple Gold, 6GB RAM, 64GB Storage)",
        "More screen means more space to do great things. Go big with the Galaxy Note8's 16.05cm (6.3) screen. It's the largest ever screen on a Note device and it still fits easily in your hand. Use the S Pen to express yourself in ways that make a difference. Draw your own emojis to show how you feel or write a message on a photo and send it as a handwritten note. Do things that matter with the S Pen",
        "../note8.jpg",
        36900,
        ["Note8", "phone", "Samsung"]
      )
    );
    productArray.push(
      new Product(
        "Samsung Galaxy S9 (Coral Blue, 4GB RAM, 64GB Storage)",
        "Super Speed Dual Pixel Camera Infinity Display: edge-to-edge immersive screen, enhancing your entertainment experience IP68 rating: withstands splashes, spills, and rain so it can take a dip, worry-free Fast Wireless Charging: Avoid the wires and power up quickly by placing your phone on a Fast Wireless Charger Internal Memory 64 GB. Expandable Storage up to 400GB",
        "../samsungs9.jpg",
        489000,
        ["S9", "phone", "Samsung"]
      )
    );
    return productArray;
  }
}

export default Product;
