import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  getEvents(): IEvent[] {
    return [
      {
        title: "Visita al Bolomor",
        image: "assets/bolomor.jpg",
        date: "2018-05-07",
        description: "Conoceremos nuestros ancestros",
        price: 5.00
      },{
        title: "Gymkana cultural",
        image: "assets/gymkana.jpg",
        date: "2018-05-06",
        description: "Nos los pasaremos genial",
        price: 2.00
      },{
        title: "Ruta cicloturística",
        image: "assets/cicloturismo.jpg",
        date: "2018-05-05",
        description: "Hacer deporte y disfrutar no estan reñidos",
        price: 15.00
      }
    ];
  }

  constructor() { }
}
