import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book, Result } from 'src/app/interfaces/result.interface';

@Component({
  selector: 'app-browser-list',
  templateUrl: './browser-list.component.html',
  styleUrls: ['./browser-list.component.css']
})
export class BrowserListComponent {

  @Input()
  result: Result | any;

  @Input()
  arrayList: Book[] = [];

  @Output() eNext: EventEmitter<void>;
  @Output() ePrevious: EventEmitter<void>;
  @Output() eIdNum: EventEmitter<number>;

  constructor(){
this.eNext = new EventEmitter<void>();
this.ePrevious = new EventEmitter<void>();
this.eIdNum = new EventEmitter<number>();
  }

  fNext(){
    this.eNext.emit();
  }

  fPrevious(){
    this.ePrevious.emit();
  }
}

// fIdNum(num: number){
//   this.eIdNum.emit(num);
// }
