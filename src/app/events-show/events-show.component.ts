import { Component, OnInit } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})
export class EventsShowComponent implements OnInit {
  search: string = '';
  events: IEvent[] = [];

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

  addEvent(newEvent: IEvent){
    this.events.push(newEvent);
  }

  deleteEvent(event: IEvent) {
    let arrayDeletedEvent = this.events.filter(ev => ev != event);
    this.events = arrayDeletedEvent;
  }

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }
}