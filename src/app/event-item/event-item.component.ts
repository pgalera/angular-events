import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() event: IEvent; 
  @Output() eventToDelete = new EventEmitter<void>();

  deleteEvent() {
    this.eventToDelete.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
