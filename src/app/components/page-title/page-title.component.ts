import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  standalone: false,
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.css'
})
export class PageTitleComponent implements OnInit{


@Input() title: string | undefined

constructor(){}

ngOnInit(): void {

}
}
