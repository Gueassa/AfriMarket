import { Component } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-additional-info',
  standalone: false,
  templateUrl: './product-additional-info.component.html',
  styleUrl: './product-additional-info.component.css'
})
export class ProductAdditionalInfoComponent {

product: Product | undefined

constructor(){}
ngOnInit(): void{
  // console.log("ProductAdditionalInfoComponent");
  // console.log(this.product);
}










}
