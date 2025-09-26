import { Routes } from "@angular/router";
import { ContainerComponent } from "./container/container.component";
import { SigninComponent } from "./components/auth/signin/signin.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { ProductComponent } from "./product/product.component";
import { ProductDescriptionComponent } from "./components/product-tabs/product-description/product-description.component";
import { ProductAdditionalInfoComponent } from "./components/product-tabs/product-additional-info/product-additional-info.component";
import { ProductVendorComponent } from "./components/product-tabs/product-vendor/product-vendor.component";
import { ProductsContainerComponent } from "./components/products-container/products-container.component";




export const ROUTES : Routes =[


{
  path:'',
  component: ContainerComponent,
  pathMatch: 'full'
},


{
  path:'product/:slug',
  component: ProductComponent,

  children:[
{
  path:"",
  redirectTo:"description",
  pathMatch: "full"
},
{
path:"description",
component:ProductDescriptionComponent

},

{
path:"additional-info",
component: ProductAdditionalInfoComponent

},



{

path:"vendor-info",
component: ProductVendorComponent

},

{

path:"reviews-info",
component: ProductVendorComponent

}

  ]
}

,
{
  path:'signup',
  component: SignupComponent,
  pathMatch: 'full'
},

{
  path:'signin',
  component: SigninComponent,
  pathMatch: 'full'
},


{
  path:'products',
  component: ProductsContainerComponent,
  pathMatch: 'full',





},











];








