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
  cityData: data | undefined = undefined;
  temperature: string = '';
  wind: string = '';
  humidity: string = '';

  ngOnInit() {

  }
  search(value: string){
    console.log(value);
    this.cityData = this.weatherData.find((element) =>element.name.toLowerCase() === value.toLowerCase());
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
