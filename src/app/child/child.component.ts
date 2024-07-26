import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() data: any = [];
  @Output() emitEvent: EventEmitter<number> = new EventEmitter;

  deleteItem(id: number) {
   this.emitEvent.emit(id)
  }
} 
