import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import {ProductService} from './product-service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
  title: string  = "product list";

  imgHeight: number = 15;

  showImage : boolean = true;
  listFilter : string = "";
prod : IProduct[];
getIde()   :  any {

};
constructor(private _productService : ProductService) {

  
}



ngOnInit() : void {
 this._productService.getData().
  subscribe(data => this.products = data);
 

}
products : IProduct[];



  toggleImage(): void {
  this.showImage = !this.showImage;
}


}
