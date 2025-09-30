import { Component,Input,OnDestroy,OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { ResultRequest } from '../models/result-request';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  encapsulation: ViewEncapsulation.None

})



export class ProductListComponent implements OnInit, OnDestroy {


 @Input() filter: string = '';  // Reçoit la valeur du parent

          // Tous les produits
filteredProducts: any[] = [];
 @Input() products: Product[] = [];
  @Input() isLoading: boolean = false;









  // products: Product[] = [];
  resultData: ResultRequest<Product> | undefined
  isDisplayModal: boolean = false
  isloading: boolean=true
  modalProduct: Product | undefined
  productsSub: Subscription | undefined


page: number = 1;
pageSize: number = 12;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {

   this.productsSub = this.productService.getProducts()
.subscribe( {

next:(resultData: ResultRequest<Product>)=>{
if(resultData.isSuccess) {
 this.products = resultData.results
//permet d'afficher les produits de manière aléatoire , lors de rechargement de la page//
 this.products = this.shuffleArray(resultData.results);
          this.filteredProducts = this.products;


}
  this.isloading = false


},


error:(error:any)=>{console.log("Error:", error); this.isloading = true },

complete:()=>{
  console.log("complete !")
}

   } )

  }

ngOnDestroy(){
  this.productsSub?.unsubscribe()
}



    // this.products = this.productService.getProducts()

  //  console.log(this.products);

 getNumber(): number{return 3}

 handleDeleteProduct(product: Product){
  this.products = this.products.filter(p => p._id !== product._id)
  // console.log("handleDeleteProduct",product);
  }

  handleDisplayProductViewModal(product: Product){
  // console.log("-------ProductView-----------")
  if(product){
 this.isDisplayModal = true;
 this.modalProduct = product;
  }
  }

 handleCloseModal(){
  this.isDisplayModal = false
 this.modalProduct = undefined
 }

//Affiche les produits de manière aleatoire.
 private shuffleArray(array: Product[]): Product[] {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }



applyFilter(): void {
  const search = this.filter.toLowerCase().trim();
  this.filteredProducts = this.products.filter(product =>
    product.name.toLowerCase().includes(search) ||
    (product.sold_price && product.sold_price.toString().includes(search))
  );
}






  }













