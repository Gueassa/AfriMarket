import { Component, OnDestroy, OnInit } from '@angular/core';
import { sliderData } from '../../../assets/api/api-slider';
import { Slide } from '../../models/slide';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-slider',
  standalone: false,
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css'
})
export class HomeSliderComponent implements OnInit, OnDestroy {

  slider: Slide[] = sliderData;
  currentSlide: Slide = this.slider[0];
  currentIndex: number = 0;

indexObs: Observable <number> = interval(5000)
indexObsSub: Subscription | undefined

constructor() {}
  ngOnDestroy(): void {

  }

ngOnInit(): void {
this.indexObsSub = this.indexObs.subscribe (
  {next: (value: number)=>{this.handleChange(1);}

})

}




  // fonction de navigation
  handleChange(direction: number) {
    if (direction === -1) {   // previous
      this.currentIndex = (this.currentIndex - 1 + this.slider.length) % this.slider.length;
    } else {   // next
      this.currentIndex = (this.currentIndex + 1) % this.slider.length;
    }

    // met à jour la slide active
    this.currentSlide = this.slider[this.currentIndex];
  }

}





function next(value: number): void {
  throw new Error('Function not implemented.');
}

