import { Component } from '@angular/core';
import { IFlash } from './model/flash.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editing = false;
  editingId: number;

  title = 'angular-flashcard-game';

  flashs: IFlash[] = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
      show: false,
      id: getRandomNumber(),
    },
    {

      question: 'Question 2',
      answer: 'Answer 2',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
      show: false,
      id: getRandomNumber(),
    }
  ];

  trackByFlashId(index: number, flash: IFlash): number {
    return flash.id;
  }

  handleToggleCard(id: number): void {
    const flash: IFlash = this.flashs.find(flash => flash.id === id);

    flash.show = !flash.show;
  }
  
  handleDelete(id: number): void {
    const flashId: number = this.flashs.indexOf(flash => flash.id === id);
    this.flashs.splice(flashId, 1);
  }
  
  handleEdit(id: number): void {
    this.editing = true;
    this.editingId = id;
    // TODO: add editing locig after adding the form
  }
  
  handleRememberedChange({id, flag}): void {
    const flash: IFlash = this.flashs.find(flash => flash.id === id);
    flash.remembered = flag === 'correct' || flag === 'incorrect' ? flag : null;
  }
}

function getRandomNumber(): number {
  return Math.floor(Math.random() * 10000);
}
