import{Injectable} from "@angular/core";
import {IProduct} from "./IProduct";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()


export class ProductService{

private _productUrl = "https://api.myjson.com/bins/187r6i";

constructor( private _http : HttpClient){

}

 getData():  Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl);
 }

 }
 