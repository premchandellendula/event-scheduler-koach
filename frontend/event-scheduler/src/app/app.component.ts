import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Event } from './event';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event-scheduler-frontend';

  start_time: number = 0;
  end_time: number = 1;
  events: Event[] = [];
  message: string = '';
  messageType: 'success' | 'error' = 'success'

  private apiUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.http.get<Event[]>(this.apiUrl).subscribe(events => {
        this.events = events;
    });
  }


  addEvent() {
    const startTime = Number(this.start_time);
    const endTime = Number(this.end_time);


    if (startTime < 0 || endTime > 24 || startTime >= endTime) {
      this.message = "Invalid event times";
      this.messageType = 'error';
      return;
    }

    const newEvent = { start_time: startTime, end_time: endTime };
    this.http.post(this.apiUrl, newEvent).subscribe(
        () => {
            this.message = 'Event added successfully.';
            this.loadEvents();
            this.messageType = 'success'
        },
        (error) => {
            this.message = error.error.message || 'Failed to add event.';
            this.messageType = 'error'
        }
    );
  }
}
