// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Product } from '../models/product';
// import { ProductService } from '../services/product.service';
// import { Subscription } from 'rxjs';
// import { ResultRequest } from '../models/result-request';
// import { PanierService } from '../services/panier.service';  // ✅ Import du service panier

// @Component({
//   selector: 'app-product',
//   standalone: false,
//   templateUrl: './product.component.html',
//   styleUrl: './product.component.css'
// })

// export class ProductComponent implements OnInit, OnDestroy  {
// handleDisplayProductViewModal($event: Product) {
// throw new Error('Method not implemented.');
// }

//   slug: string|undefined;
//   data:string | undefined = "<p>Data</p>";
//   currentImage:string|undefined;
//   product: Product|undefined;
//   productSub: Subscription |undefined;
//   resulData: ResultRequest<Product> | undefined;
//   isloading: boolean = true;
//   pageSize: any;
//   page: any;
// selectedQuantity: any;
// similarProducts: Product[] = [];

//   // ✅ injection de PanierService
//   constructor(
//     private route: ActivatedRoute,
//     private productService: ProductService,
//     private panierService: PanierService
//   ){}

//   ngOnInit(): void {
// this.slug = this.route.snapshot.params['slug'];
// this.productSub = this.productService.getProducts()
//   .subscribe({
//     next: (result: ResultRequest<Product>) => {
//       if (result.isSuccess) {
//         // Récupère le produit courant
//         this.product = result.results.find(p => p.slug === this.slug);

//         if (this.product) {
//           this.currentImage = this.product.imageUrl[0];

//           // Produits similaires (même catégorie, sauf le produit courant)
//           // limite à 4 produits pour l'affichage
//  // limite à 4
//         }
//       }
//       this.isloading = false;
//     },
//     error: (error: any) => {
//       console.log("Error:", error);
//       this.isloading = false;
//     }
//   });

































//     window.scrollTo(0, 0);
//     this.slug = this.route.snapshot.params["slug"];
//     this.productSub = this.productService.getProducts()
//       .subscribe({
//         next: (resultData: ResultRequest<Product>)=>{
//           if(resultData.isSuccess)
//             this.product = resultData.results.find(p => p.slug === this.slug);
//           this.currentImage = this.product?.imageUrl[0];
//           this.isloading = false;
//           console.log(this.product);
//         },
//         error:(error: any)=>{
//           console.log("Error:", error);
//           this.isloading = true;
//         },
//       });
//     console.log(this.slug);
//   }




//   ngOnDestroy(): void {
//     this.productSub?.unsubscribe();
//   }

//   handleChangeCurrentImage(url: string) {
//     this.currentImage = url;
//   }



//  ajouterAuPanier() {
//     if (this.product) {
//       this.panierService.ajouterProduit({
//         ...this.product,
//         quantity: this.selectedQuantity
//       });
//       alert(`${this.product.name} a été ajouté au panier !`);
//     }
//   }

















import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { ResultRequest } from '../models/result-request';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnDestroy {
  favorisService: any;
handleDisplayProductViewModal($event: Product) {
throw new Error('Method not implemented.');
}
goToProduct(arg0: string|undefined) {
throw new Error('Method not implemented.');
}

  slug: string | undefined;
  currentImage: string | undefined;
  product: Product | undefined;
  productSub: Subscription | undefined;
  isloading: boolean = true;
  selectedQuantity: any;
  similarProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private panierService: PanierService
  ) {}

  ngOnInit(): void {
    // ✅ Récupération du slug
    this.slug = this.route.snapshot.params['slug'];

    this.productSub = this.productService.getProducts().subscribe({
      next: (result: ResultRequest<Product>) => {
        if (result.isSuccess) {
          // ✅ Trouver le produit courant
          this.product = result.results.find(p => p.slug === this.slug);

          if (this.product) {
            this.currentImage = this.product.imageUrl[0];

            // ✅ Produits similaires
            this.similarProducts = result.results
              .filter(p =>
                p.category === this.product?.category &&
                p._id !== this.product._id
              )
              .slice(0, 6);
          }
        }
        this.isloading = false;
      },
      error: (error: any) => {
        console.error("Error:", error);
        this.isloading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }



   handleChangeCurrentImage(url: string) {
    this.currentImage = url;
  }


  ajouterAuPanier() {
    if (this.product) {
      this.panierService.ajouterProduit({
        ...this.product,
        quantity: this.selectedQuantity
      });
      alert(`${this.product.name} a été ajouté au panier !`);
    }
  }



// Ajouter au favoris
ajouterAuxFavoris() {
  if (this.product) {
    this.favorisService.ajouterFavoris(this.product);
    alert(`${this.product.name} a été ajouté aux favoris !`);
  }
}

// Vérifier si le produit est déjà favori
estFavoris(): boolean {
  return this.product ? this.favorisService.isFavoris(this.product) : false;
}










}

