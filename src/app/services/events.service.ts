import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getData() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:4200/')
      .set('Authorization', 'Basic f2334ea2d33e95f6bf3d45f914e37a6b');
    // .set('Host', '');
    let url = 'https://api.tidalevents.io/event-kiosk/dc872bed2f2f52a9/events';
    return this.http.get(url, { headers: headers });
  }
}
