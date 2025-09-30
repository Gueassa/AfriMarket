// src/app/components/panier/panier.component.ts
import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  standalone:false
})
export class PanierComponent implements OnInit {
updateTotal() {

}
  products: any[] = [];

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    // this.products = this.panierService.getProduits();

  this.products = this.panierService.getProduits().map(p => ({
    ...p,
    quantity: p.quantity || 1 // initialise la quantité par produit
  }));




     console.log(this.products);
  }

  supprimerProduit(index: number) {
    this.panierService.supprimerProduit(index);
    this.products = this.panierService.getProduits(); // mise à jour de la liste
  }

  viderPanier() {
    this.panierService.viderPanier();
    this.products = [];
  }


// getTotal(): string {
//   const total = this.products.reduce((sum, p) => sum + Number (p.sold_price || 100), 0);
//   return (total / 100).toFixed(2);
// }

getTotal(): string {
  const total = this.products.reduce(
    (sum, p) => sum + (Number(p.sold_price || 100) * (p.quantity || 1)),
    0
  );
  return (total / 100).toFixed(2);
}



}
