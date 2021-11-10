import { Component, OnInit, OnChanges } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
})
export class MainSectionComponent implements OnInit, OnChanges {
  data: Product[] = [];
  //! Default Values
  selectedPageNumber: number = 1;
  sortValue: any = 'Name';
  showValue: number = 9;
  selectedBrand = 'All';
  colorPicked = 'Blue';

  numberOfAllBrand = 0;
  numberOfAppleBrand = 0;
  numberOfBeatsBrand = 0;
  numberOfSamsungBrand = 0;
  numberOfSiemensBrand = 0;

  totalNumberOfPages = 0;
  pages: number[] = [];

  //! Final data to render
  itemsToRender: any = [];
  finalDataToRender: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.data = this.productService.getProducts();

    //! Default Color is Blue
    this.itemsToRender = this.data.filter((ele) => ele.color == 'Blue');

    //! Brand item counting
    this.numberOfAllBrand = this.itemsToRender.length;
    this.numberOfAppleBrand = this.itemsToRender.filter(
      (ele: any) => ele.brand == 'Apple'
    ).length;
    this.numberOfBeatsBrand = this.itemsToRender.filter(
      (ele: any) => ele.brand == 'Beats'
    ).length;
    this.numberOfSamsungBrand = this.itemsToRender.filter(
      (ele: any) => ele.brand == 'Samsung'
    ).length;
    this.numberOfSiemensBrand = this.itemsToRender.filter(
      (ele: any) => ele.brand == 'Siemens'
    ).length;

    //! Default Sort is Name
    this.itemsToRender = this.itemsToRender.sort((a: any, b: any) => {
      if (a.productName > b.productName) {
        return 1;
      } else if (a.productName < b.productName) {
        return -1;
      } else {
        return 0;
      }
    });
    console.log(this.itemsToRender);

    //! Defaul Show Value
    // //! pagination required
    this.totalNumberOfPages = Math.ceil(
      this.itemsToRender.length / this.showValue
    );
    for (let i = 1; i <= this.totalNumberOfPages; i++) {
      this.pages.push(i);
    }
    this.finalDataToRender = this.itemsToRender.slice(
      (this.selectedPageNumber - 1) * this.showValue,
      Number((this.selectedPageNumber - 1) * this.showValue) +
        Number(this.showValue)
    );
  }

  ngOnChanges() {}

  //! colors code
  handleColorPick(newColor: any) {
    this.colorPicked = newColor;
    this.selectedPageNumber = 1;
    console.log(this.colorPicked);
    this.resetAll();
  }

  //!Sorting
  SetSortValue(drpValue: any) {
    this.sortValue = drpValue.target.value;
    this.resetAll();
    // console.log(this.sortValue);
  }

  //! Show value changes
  SetShowValue(shwValue: any) {
    this.showValue = shwValue.target.value;
    this.resetAll();
    console.log(this.showValue);
  }

  //! Brand Selection
  handleBrandSelection(newBrand: any) {
    this.selectedBrand = newBrand;
    this.selectedPageNumber = 1;
    console.log(this.selectedBrand);
    this.resetAll();
  }

  //! When page changes
  onChangePage(pageOfItems: any) {
    // update current page of items
    this.selectedPageNumber = Number(pageOfItems.srcElement.innerText);
    this.resetAll();
    console.log(this.selectedPageNumber);
  }

  //! When Color Changes, Brand Changes, Sort Changes
  resetAll() {
    //! Filtering according to Color
    this.itemsToRender = this.data.filter(
      (ele) => ele.color == this.colorPicked
    );

    //! filtering according to Brand
    if (this.selectedBrand !== 'All') {
      this.itemsToRender = this.itemsToRender.filter(
        (ele: any) => ele.brand == this.selectedBrand
      );
    }

    //! Brand item counting
    this.numberOfAllBrand = this.data.filter(
      (ele) => ele.color == this.colorPicked
    ).length;

    this.numberOfAppleBrand = this.data
      .filter((ele) => ele.color == this.colorPicked)
      .filter((ele: any) => ele.brand == 'Apple').length;
    this.numberOfBeatsBrand = this.data
      .filter((ele) => ele.color == this.colorPicked)
      .filter((ele: any) => ele.brand == 'Beats').length;
    this.numberOfSamsungBrand = this.data
      .filter((ele) => ele.color == this.colorPicked)
      .filter((ele: any) => ele.brand == 'Samsung').length;
    this.numberOfSiemensBrand = this.data
      .filter((ele) => ele.color == this.colorPicked)
      .filter((ele: any) => ele.brand == 'Siemens').length;

    //! Sorting according to SortValue
    if (this.sortValue == 'ascending') {
      this.itemsToRender = this.itemsToRender.sort((a: any, b: any) => {
        if (a.offerPrice > b.offerPrice) {
          return 1;
        } else if (a.offerPrice < b.offerPrice) {
          return -1;
        } else {
          return 0;
        }
      });
    } else if (this.sortValue == 'descending') {
      this.itemsToRender = this.itemsToRender.sort((a: any, b: any) => {
        if (a.offerPrice < b.offerPrice) {
          return 1;
        } else if (a.offerPrice > b.offerPrice) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      this.itemsToRender = this.itemsToRender.sort((a: any, b: any) => {
        if (a.productName > b.productName) {
          return 1;
        } else if (a.productName < b.productName) {
          return -1;
        } else {
          return 0;
        }
      });
    }

    //! Show Value Change
    this.totalNumberOfPages = Math.ceil(
      this.itemsToRender.length / this.showValue
    );
    this.pages = [];
    for (let i = 1; i <= this.totalNumberOfPages; i++) {
      this.pages.push(i);
    }

    this.finalDataToRender = this.itemsToRender.slice(
      (this.selectedPageNumber - 1) * this.showValue,
      Number((this.selectedPageNumber - 1) * this.showValue) +
        Number(this.showValue)
    );
    console.log(this.itemsToRender);
  }
}
