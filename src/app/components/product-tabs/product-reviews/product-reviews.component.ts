import { Component } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-reviews',
  standalone: false,
  templateUrl: './product-reviews.component.html',
  styleUrl: './product-reviews.component.css'
})
export class ProductReviewsComponent {
product: Product | undefined

constructor(){

}
ngOnInit():void{
console.log("ProductReviewsComponent");
console.log(this.product);
}




}
