// src/app/services/panier.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  produits: Product[] = [];


  private panier: any[] = [];
  apiUrl: any;
  http: any;

  constructor() {}

 private totalSubject = new BehaviorSubject<number>(0);
  total$ = this.totalSubject.asObservable();







// Ajouter un produit au panier
  ajouterProduit(produit: any) {
    this.panier.push(produit);
  }

  // 📋 Récupérer tous les produits du panier
  getProduits() {
    return this.panier;
  }

  // ➖ Supprimer un produit par son index
  supprimerProduit(index: number) {
    this.panier.splice(index, 1);
  }

  // 🗑️ Vider complètement le panier
  viderPanier() {
    this.panier = [];
  }

  // 💰 Calculer le total du panier
getTotal(): number {
  return this.produits.reduce((sum:number, p:any) => sum + parseFloat(p.sold_price as any||100),0);
}





// panier.service.ts
getNombreProduits(): number {
  return this.produits.length;
}

//pour ajouter le nombre , quantité des produits
addProduit(produit: Product) {
    const produitExist = this.produits.find(p => p._id === produit._id); // p est reconnu maintenant
    if (produitExist) {
      produitExist.quantity = (produitExist.quantity || 1) + 1; // sécuriser quantity
    } else {
      produit.quantity = 1;
      this.produits.push(produit);
    }
  }





}










