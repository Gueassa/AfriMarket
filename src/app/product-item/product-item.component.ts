import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { FavorisService } from '../services/favoris.service';
import { PanierService } from '../services/panier.service';
import { Router } from '@angular/router';

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



constructor(private panierService: PanierService,

  private router: Router,
   private favorisService: FavorisService,
) {}




isFavoris= false


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

  toggleFavorite(product?: Product, event?: MouseEvent) {
  if (event) {
    event.stopPropagation(); // empêche le clic de remonter au parent
  }
  if (!product) return;

  this.isFavoris = !this.isFavoris;
  this.favoriteToggled.emit(product);
  console.log('Favori togglé pour', product.name, '=>', this.isFavoris);
}









ajouterAuPanier(product?: Product, event?: MouseEvent) {
  if (event) event.stopPropagation();
  if (!product) return;

  this.panierService.ajouterProduit({ ...product, quantity: 1 });
  alert(`${product.name} a été ajouté au panier !`);

}

// pour ajouter au favoris//

ajouterAuxFavoris(product?: Product, event?: MouseEvent) {
  if (event) event.stopPropagation(); // empêche le clic de remonter
  if (!product) return;

  this.favorisService.ajouterFavoris(product); // ajoute le produit aux favoris
   this.showToast(`${product.name} a été ajouté au panier ✅`);
}

showToast(message: string) {
  const toast = document.getElementById('toast')!;
  toast.textContent = message;
  toast.className = 'toast show';
  setTimeout(() => {
    toast.className = 'toast';
  }, 3000);


}



}







































































