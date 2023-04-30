import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent {
  
  @Output('valor') valorSalida :EventEmitter<number> = new EventEmitter();

  SendDataonChange(event: any) {
    this.valorSalida.emit(event.target.value);
  }

}
