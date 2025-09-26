import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-modal-product-view',
  standalone: false,
  templateUrl: './modal-product-view.component.html',
  styleUrl: './modal-product-view.component.css'
})
export class ModalProductViewComponent implements OnInit {
ngOnInit(): void {

}
 isImageLoading: boolean = true;
@Input() product: Product |undefined
@Output() close : EventEmitter<string> = new  EventEmitter<string>()


closeModal(){
  this.close.emit()
}

onImageLoad() {
    this.isImageLoading = false;
  }
}
