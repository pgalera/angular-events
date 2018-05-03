import { Component, OnInit } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})
export class EventsShowComponent implements OnInit {

  events: IEvent[] = [
    {
      title: "Visita al Bolomor",
      image: "",
      date: "2018-05-05",
      description: "Conoceremos nuestros ancestros",
      price: 23.95
    },{
      title: "Gimkana cultural",
      image: "",
      date: "2018-05-06",
      description: "Nos los pasaremos genial",
      price: 10.00
    },{
      title: "Ruta cicloturística",
      image: "",
      date: "2018-05-06",
      description: "Hacer deporte y disfrutar no estan reñidos",
      price: 5.25
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
