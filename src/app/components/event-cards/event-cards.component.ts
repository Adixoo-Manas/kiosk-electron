import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event-cards',
  templateUrl: './event-cards.component.html',
  styleUrls: ['./event-cards.component.css'],
})
export class EventCardsComponent implements OnInit {
  @Input() location: string = '';

  constructor(private event: EventsService) {}

  ngOnInit(): void {}

  handleBookBtnClick(){
    alert("Booking is not available yet!");
  }
}
