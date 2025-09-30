// src/app/services/favoris.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  private favoris: Product[] = [];

  constructor() {}

  // Ajouter un produit aux favoris
  ajouterFavoris(product: Product) {
    if (!this.favoris.find(p => p._id === product._id)) {
      this.favoris.push(product);
    }
  }

  // Supprimer un produit des favoris
  retirerFavoris(product: Product) {
    this.favoris = this.favoris.filter(p => p._id !== product._id);
  }

  // Récupérer tous les favoris
  getFavoris(): Product[] {
    return this.favoris;
  }

  // Vérifier si un produit est déjà dans les favoris
  isFavoris(product: Product): boolean {
    return !!this.favoris.find(p => p._id === product._id);
  }

  // Vider tous les favoris
  clear() {
    this.favoris = [];
  }
}
