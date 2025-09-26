import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Category } from '../../../assets/api/category';
import { CategoriesService } from '../../services/categories.service';
import { Subscription } from 'rxjs';
import { ResultRequest } from '../../models/result-request';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-container',
  standalone: false,
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.css'
})
export class ProductsContainerComponent implements OnInit, OnDestroy{

@Input() title: string | undefined



categories: Category[] = [];
currentCategory: Category | undefined
categoriesSub: Subscription | undefined;
products: Product[] = []
productSub: Subscription|undefined
isLoading:boolean = true



constructor(private categoriesService: CategoriesService,
private productService: ProductService
){}

ngOnInit(): void {
this.categoriesSub = this.categoriesService.getCategories()
.subscribe({
  next:(value: ResultRequest<Category>)=>{
    if(value.isSuccess){
     this.categories = value.results;
      this.handleClick(null, this.categories[0])

    }
    console.log("API Response:", value); // 👈 debug


  }
})
}

handleClick(event: any, category: Category){
 this.currentCategory =  category
 if(event) {
  event.preventDefault()
 }

  this.productSub = this.productService.getProducts()
.subscribe({
next: (resultData: ResultRequest<Product>)=>{
if (resultData.isSuccess){
  let products = resultData.results
  this.isLoading = true
  this.products = products.filter((product: Product)=>{

    for (let index = 0; index <product.categories.length; index++){
    if(product.categories[index].slug === category.slug){
      return true
    }
  }
  return false
  })
  this.isLoading = false
  console.log(products)
  }

}

})
  // console.log(category);
}

ngOnDestroy(): void {
  this.categoriesSub?.unsubscribe()
  this.productSub?.unsubscribe()
  }

//pour ne pas que la sidebar depasse le footer lors du défilement//***************** */
ngAfterViewInit(): void {
  const category = document.querySelector('.products-category') as HTMLElement;
  const container = document.querySelector('.product-container') as HTMLElement;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const categoryHeight = category.offsetHeight;

    const windowHeight = window.innerHeight;
    const middlePosition = scrollTop + (windowHeight - categoryHeight) / 2;
    const maxPosition = containerTop + containerHeight - categoryHeight;
    const minPosition = containerTop;

    // Limiter la position pour qu'elle reste dans le container
    const finalTop = Math.min(Math.max(middlePosition, minPosition), maxPosition);

    category.style.position = 'absolute';
    category.style.top = `${finalTop - containerTop}px`; // position relative au container
  });
}
//************************************************************************* */
}

























