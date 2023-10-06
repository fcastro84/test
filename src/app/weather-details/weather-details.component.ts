import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit{
  @Input() weatherData: data[] = [];
  here = false;
  temperature: string = '';
  wind: string = '';
  humidity: string = '';

  ngOnInit() {

  }
  search(value: string){
    console.log(value);
    this.weatherData.forEach((element) => {
      if(element.name.toLowerCase() === value.toLowerCase()){
        this.temperature = element.temperature;
        this.wind = element.wind;
        this.humidity = element.humidity;
        this.here = true;
      }
    });
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
