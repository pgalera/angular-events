import { Component, OnInit } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})
export class EventsShowComponent implements OnInit {
  search: string = '';

  newEvent: IEvent = {
    title: "",
    image: "",
    date: "",
    description: "",
    price: 0
  }

  events: IEvent[] = [
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

  orderDate() {
    this.search='';
    this.events.sort((a:IEvent,b:IEvent) => {
      if(a.date > b.date) return 1;
      if(a.date < b.date) return -1;
      return 0;
    });
  };

  orderPrice() {
    this.search='';
    this.events.sort((a:IEvent,b:IEvent) => {
      if(a.price > b.price) return 1;
      if(a.price < b.price) return -1;
      return 0;
    });
  };

  addEvent(){
    this.events.push(this.newEvent);
    this.resetNewEvent();
  }

  resetNewEvent(){
    let temporal: IEvent = {
      title: "",
      image: "",
      date: "",
      description: "",
      price: 0
    }
    this.newEvent=temporal;
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvent.image = reader.result;
    });
  }

  constructor() { }

  ngOnInit() {
  }

}