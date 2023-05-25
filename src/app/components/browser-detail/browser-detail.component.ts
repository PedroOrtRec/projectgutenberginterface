import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Book, Result } from 'src/app/interfaces/result.interface';

@Component({
  selector: 'app-browser-detail',
  templateUrl: './browser-detail.component.html',
  styleUrls: ['./browser-detail.component.css']
})
export class BrowserDetailComponent{

  @Input() bookDetail: Result | undefined;

constructor() {}

}
