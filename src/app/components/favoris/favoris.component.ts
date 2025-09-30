import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { FavorisService } from '../../services/favoris.service';
import { CommonModule } from '@angular/common';
import { PanierService } from '../../services/panier.service';


@Component({
  selector: 'app-favoris',
  imports: [CommonModule],
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css'],

})



export class FavorisComponent implements OnInit {



  favoris: Product[] = [];


  constructor(private favorisService: FavorisService,
    private panierService: PanierService
  ) {}

  ngOnInit(): void {
    this.favoris = this.favorisService.getFavoris();
  }

  retirer(product: Product) {
    this.favorisService.retirerFavoris(product);
    this.favoris = this.favorisService.getFavoris();
  }

  clear() {
    this.favorisService.clear();
    this.favoris = [];
  }


ajouterAuPanier(product: Product) {
    this.panierService.ajouterProduit({ ...product, quantity: 1 });
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
