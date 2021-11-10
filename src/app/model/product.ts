export class Product {
  productName: string;
  imgSrc: string;
  mrp: number;
  offerPrice: number;
  brand: string;
  color: string;
  ratingImg: string;

  constructor(
    productName: string,
    imgSrc: string,
    mrp: number,
    offerPrice: number,
    brand: string,
    color: string,
    ratingImg: string
  ) {
    this.productName = productName;
    this.imgSrc = imgSrc;
    this.mrp = mrp;
    this.offerPrice = offerPrice;
    this.brand = brand;
    this.color = color;
    this.ratingImg = ratingImg;
  }
}
