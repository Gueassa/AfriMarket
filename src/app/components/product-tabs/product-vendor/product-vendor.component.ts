import { Component } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-vendor',
  standalone: false,
  templateUrl: './product-vendor.component.html',
  styleUrl: './product-vendor.component.css'
})
export class ProductVendorComponent {
product: Product | undefined

constructor(){

}
ngOnInit():void{
console.log("ProductVendorComponent");
console.log(this.product);
}
}
