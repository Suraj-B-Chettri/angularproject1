import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterPipe } from './product-list/Product-filter-pipe';
import { CostumerComponent } from './costumer/costumer.component';
import { ProductService } from './product-list/product-service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule} from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailGuard } from './product-detail/product-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    CostumerComponent,
    WelcomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'product',
        component: ProductListComponent
      },
      {
        path : '',
        component: WelcomeComponent
      },
      {
          path: 'product/:id',
          component : ProductDetailComponent,
          
        
      }
      ]
    )
  ],
  providers: [ProductService,ProductDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
