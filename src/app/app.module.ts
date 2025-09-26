import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ModalProductViewComponent } from './modal-product-view/modal-product-view.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from './App.routing';
import { ProductComponent } from './product/product.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { ProductDescriptionComponent } from './components/product-tabs/product-description/product-description.component';
import { ProductAdditionalInfoComponent } from './components/product-tabs/product-additional-info/product-additional-info.component';
import { ProductVendorComponent } from './components/product-tabs/product-vendor/product-vendor.component';
import { ProductReviewsComponent } from './components/product-tabs/product-reviews/product-reviews.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    ProductListComponent,
    ProductItemComponent,
    ModalProductViewComponent,
    SigninComponent,
    SignupComponent,
    ProductComponent,
    LoadingComponent,
    HomeSliderComponent,
    PaymentCardComponent,
    ProductDescriptionComponent,
    ProductAdditionalInfoComponent,
    ProductVendorComponent,
    ProductReviewsComponent,
    ProductDetailsComponent,
    ProductsContainerComponent,
    AsideNavComponent,
    PageTitleComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    NgxPaginationModule,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
