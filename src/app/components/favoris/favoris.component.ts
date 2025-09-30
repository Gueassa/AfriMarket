import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { FavorisService } from '../../services/favoris.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-favoris',
  imports: [CommonModule],
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css'],

})



export class FavorisComponent implements OnInit {
ajouterAuPanier() {
throw new Error('Method not implemented.');
}

  favoris: Product[] = [];

  constructor(private favorisService: FavorisService) {}

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
}
