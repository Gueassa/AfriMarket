import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../models/product';


@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {


  @Input() product: Product |undefined
  @Output() deleteProductItem: EventEmitter<Product> = new EventEmitter<Product>()
  @Output() handleDisplayProductViewModal = new EventEmitter<any>();
@Output() quickView = new EventEmitter<Product>();



  ngOnInit(): void {
  // console.log("-------------PPRODUCT ITEM----------");
  // console.log(this.product);
  }

  // handleClickProduct(product: Product |undefined){
  //   console.log(product);
  //   this.handleDisplayProductViewModal.emit(product)

  // }
handleClickProduct(product: any) {

this.quickView.emit(product);
}



  deleteProduct(product:Product|undefined){
    // console.log(product);
    // this.deleteProductItem.emit(product)

}




@Output() favoriteToggled = new EventEmitter<Product>();

  isFavorite = false;





  toggleFavorite(product?: Product, event?: MouseEvent) {
  if (event) {
    event.stopPropagation(); // empêche le clic de remonter au parent
  }
  if (!product) return;

  this.isFavorite = !this.isFavorite;
  this.favoriteToggled.emit(product);
  console.log('Favori togglé pour', product.name, '=>', this.isFavorite);
}
}



















































