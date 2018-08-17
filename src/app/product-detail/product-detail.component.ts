import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product-list/product-service';
import { IProduct} from '../product-list/IProduct';
import { ProductListComponent } from '../product-list/product-list.component';




@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  prodId : number;
  prod: IProduct[];
prodIndex : any;
  i : any;
  constructor(private _r : ActivatedRoute,
    private _router : Router,
    private _productService : ProductService) { 
  
      
      
      this.prodId = _r.snapshot.params['id'];
     
  


      this.prodIndex =  function(prodId){
        if( prodId == 1111) {
          return 0;
        } else if(prodId== 2222) {
          return 1;
        } else if(prodId== 3333) {
          return 2;
        } else if(prodId== 4444) {
          return 3;
        }
       }
this._productService.getData().subscribe(data => {
      this.prod = data;
      this.i = this.prod[this.prodIndex(this.prodId)];
  
  
  
    })
     
    this.prodIndex(this.prodId);
  

  }

  onBack() : void { 
    this._router.navigate(['/product']);
 }
  
  ngOnInit() {
}
    }


  