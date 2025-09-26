import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

@Input() product: Product | undefined

constructor() {}

handleChangeDetails(component : any){
component.product = this.product
//console.log({params: component, product: this.product})
}




}
