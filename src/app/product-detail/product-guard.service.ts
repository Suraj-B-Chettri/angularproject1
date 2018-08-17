import { Injectable } from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot} from "@angular/router";
import {Router} from "@angular/router"

@Injectable() 
export class ProductDetailGuard implements CanActivate {
   constructor(private _router : Router){}
    canActivate(route : ActivatedRouteSnapshot) : boolean {
        let id = +route.url[1].path;
        if(isNaN(id) || id < 1){
            alert("Invalid product Id");
            this._router.navigate(['/product']);
            
    };
    return true;
}
}