import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { auth_items, nav_items } from '../../api/nav';
import { Items } from '../../models/item';

@Component({
  selector: 'app-aside-nav',
  standalone: false,
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.css'
})
export class AsideNavComponent implements OnInit {
navs_data: Items[] = nav_items
auths_data: Items[] = auth_items
@Output() close: EventEmitter<string> = new EventEmitter<string> ()


constructor(){}

ngOnInit(): void {

}
handleClose(){
  this.close.emit()
}


}
