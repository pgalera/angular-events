import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  @Output() newEventAdd = new EventEmitter<IEvent>();

  newEvent: IEvent = {
    title: "",
    image: "",
    date: "",
    description: "",
    price: 0
  }

  addEvent(){
    this.newEventAdd.emit(this.newEvent);
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
