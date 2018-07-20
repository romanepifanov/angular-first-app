import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

import { ProductModule } from './products/product.module';
import { AppComponent } from './app.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent }
      ,{ path: '', redirectTo: 'welcome', pathMatch: 'full' }
      ,{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
