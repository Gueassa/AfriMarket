import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { ResultRequest } from '../models/result-request';


@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})



export class ProductComponent implements OnInit, OnDestroy  {

  slug: string|undefined
  data:string | undefined = "<p>Data</p>"
  currentImage:string|undefined
  product: Product|undefined
  productSub: Subscription |undefined
  resulData: ResultRequest<Product> | undefined
  isloading: boolean = true
  pageSize: any;
page: any;



  constructor(private route:ActivatedRoute,
    private productService: ProductService){}



    ngOnInit(): void {
window.scrollTo(0, 0)
    this.slug = this.route.snapshot.params["slug"]
    this.productSub = this.productService.getProducts()


    .subscribe({
      next: (resultData: ResultRequest<Product>)=>{
        if(resultData.isSuccess)
       this.product = resultData.results.find(p => p.slug === this.slug);
        this.currentImage = this.product?.imageUrl[0]
        this.isloading = false
        console.log(this.product)

      },
      error:(error: any)=>{
        console.log("Error:", error);
        this.isloading = true
      },

    })
    console.log(this.slug);
  }



  ngOnDestroy(): void{
   this.productSub?.unsubscribe()
  }

 handleChangeCurrentImage(url: string)  {
  this.currentImage = url
 }


}

