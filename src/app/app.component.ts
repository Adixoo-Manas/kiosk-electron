import { Component } from '@angular/core';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  EventsData : any = [];
  constructor(private event : EventsService){
    this.event.getData().subscribe(data => {
      console.log(data);
      this.EventsData = data;
    })
  }
}
