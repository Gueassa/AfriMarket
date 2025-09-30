import { Component, OnDestroy, OnInit, Pipe, TemplateRef } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { environment } from '../environments/environment';
import { auth_items, nav_items } from '../api/nav';
import { Items } from '../models/item';


@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'

})
export class HeaderComponent implements OnInit, OnDestroy {
data:Number | undefined
second:Number|undefined
secondSub: Subscription| undefined
siteName: string = environment.siteName
navs_data: Items[] = nav_items
auths_data: Items[] = auth_items
isDisplayMobileNav: boolean = false
  panierService: any;

 totalProduits: number = 0;

constructor(private productService:ProductService){}

nombreProduits: number = 0;//produit Quantité


  ngOnDestroy(): void {
   this.secondSub?.unsubscribe();
  }


  handleDisplayMobileNav(){
  this.isDisplayMobileNav= !this.isDisplayMobileNav

     }

 handleCloseMobileNav(){
  this.isDisplayMobileNav= false

     }

  ngOnInit(): void {

  this.productService.getNumber()
   .subscribe(
   (value)=>{
   this.data = value
  }


   )

   this.secondSub = this.productService.getSecond()
   .subscribe({
    next: (value: Number)=>{
      this.second = value
    },
    error: (error: any)=>{
      console.log(error);
    },
    complete: ()=>{
      console.log("complete");
    }
   }

   )
   }










  }


