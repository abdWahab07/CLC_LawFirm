import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  meetings = [
    {
      day: '05',
      month: 'Sep',
      title: 'Client Consultation - Smith & Co.',
      time: '10:00 to 11:00 Hrs',
      description: 'Initial consultation with Smith & Co. regarding corporate restructuring and potential legal ramifications.',
      dateClass: 'widget-49-date-info',
      buttonClass: 'btn-flash-border-info'
    },
    {
      day: '12',
      month: 'Sep',
      title: 'Contract Discussion - Johnson Law',
      time: '14:00 to 15:30 Hrs',
      description: 'Meeting with Johnson Law to finalize the terms of the partnership agreement and review all necessary legal documentation.',
      dateClass: 'widget-49-date-warning',
      buttonClass: 'btn-flash-border-warning'
    },
    {
      day: '18',
      month: 'Sep',
      title: 'Case Review - Anderson vs. State',
      time: '09:30 to 11:00 Hrs',
      description: 'Review of the Anderson vs. State case. Discussion of evidence, witness testimonies, and upcoming court dates.',
      dateClass: 'widget-49-date-danger',
      buttonClass: 'btn-flash-border-danger'
    }
  ];

  weather: any;

  private apiKey = '018bb3b6a7124ee7a40234221242908';
  private location = 'lahore';  // You can change this to any location

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.location}`;
    this.http.get(url).subscribe((data: any) => {
      this.weather = {
        location: `${data.location.name}, ${data.location.region} - ${data.location.country}`,
        date: `${data.location.localtime.split(' ')[0]}`,
        temperature: data.current.temp_c
      };
    });
  }
}
