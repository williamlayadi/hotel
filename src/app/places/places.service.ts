import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places:Place[] =[
    new Place('p1',"Manhattan Mansion",'In The Heart of New York City','https://live.staticflickr.com/65535/14723942459_4ffbaf9573_b.jpg',149.99),
    new Place('p2',"Paris Mansion",'Romantic Place In Paris!','https://live.staticflickr.com/4096/4776651712_36510e2d3f_b.jpg',209.99),
    new Place('p3',"Vignette Mansion",'Special Mansion In Secret!','https://live.staticflickr.com/4127/4966192554_40f4b7c5f3_b.jpg',99.99),
  ];

  get places(){
    return [...this._places];
  }
  constructor() { }
}
