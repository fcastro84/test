import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
cels = 0;
fahr = 0;

FahrConverter(value: string){
  this.fahr = (( parseInt(value) * 9) / 5) + 32;
  console.log('this.fahr', this.fahr)
}

CelsConverter(value: string){
this.cels = (( parseInt(value) - 32) * 5) / 9;
console.log('this.cels', this.cels)
}
}
