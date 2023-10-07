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
cels:number = 0;
fahr:number = 0;

FahrConverter(value: string){
  this.fahr = Number(((( parseInt(value) * 9) / 5) + 32).toFixed(1));
  console.log('this.fahr', this.fahr)
}

CelsConverter(value: string){
this.cels = Number((((parseInt(value) - 32) * 5) / 9).toFixed(1));
console.log('this.cels', this.cels)
}
}
