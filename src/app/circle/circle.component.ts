import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  
  @Output() colorFill: EventEmitter<any> = new EventEmitter<any>();
  @Input() index: number = 0;
  @Input() background: string = 'transparent';

  fill() {
    this.colorFill.emit(this.index);
  }
}
