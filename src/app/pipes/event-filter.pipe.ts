import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(events: IEvent[], cadenaBuscar: string): IEvent[]{
    const busqueda = cadenaBuscar ? cadenaBuscar.toLocaleLowerCase() : null;
    return busqueda ?
            events.filter(event => 
              (event.title.toLocaleLowerCase().includes(busqueda)) ||
              (event.description.toLocaleLowerCase().includes(busqueda))
            ):
            events;
  }

}
