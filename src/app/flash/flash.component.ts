import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFlash } from '../model/flash.model';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {
  @Output() onToggleCard = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onRememberedChange = new EventEmitter();

  @Input() flash: IFlash = {
    id: 1,
    question: 'React to Angular',
    answer: 'No Reaction :)',
    show: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggleCard(): void {
    this.onToggleCard.emit(this.flash.id);
  }

  deleteFlash(): void {
    this.onDelete.emit(this.flash.id);
  }
  
  editFlash(): void {
    this.onEdit.emit(this.flash.id);
  }
  
  markCorrect(): void {
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'correct',
    });
  }
  
  markIncorrect(): void {
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'incorrect',
    });
  }

}
