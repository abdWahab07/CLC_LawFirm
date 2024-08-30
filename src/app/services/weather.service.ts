// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '018bb3b6a7124ee7a40234221242908';
  private baseUrl = 'http://api.weatherapi.com/v1';

  constructor(private http: HttpClient) { }

  getCurrentWeather(location: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/current.json?key=${this.apiKey}&q=${location}`);
  }

  getForecastWeather(location: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/forecast.json?key=${this.apiKey}&q=${location}&days=3`);
  }
}
