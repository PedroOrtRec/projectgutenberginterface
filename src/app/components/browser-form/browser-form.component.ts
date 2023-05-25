import { Component, EventEmitter, Output } from '@angular/core';
import { Language } from 'src/app/models/language';
import { UrlParams } from 'src/app/models/urlParams';

@Component({
  selector: 'app-browser-form',
  templateUrl: './browser-form.component.html',
  styleUrls: ['./browser-form.component.css']
})
export class BrowserFormComponent {

  @Output() sendParams: EventEmitter<UrlParams>

  public keyword: string = '';

  public codeLanguage: string = '';

  public languages: Language[] = [];

  public yearStart: number;

  public yearEnd: number;

  constructor(){
    this.languages = [{code: 'es', name: 'Español'}, {code: 'en', name: 'English'}]

    this.yearStart = -1105
    this.yearEnd = 2023

    this.sendParams = new EventEmitter<UrlParams>
  }

  send(){
    console.log({keyword: this.keyword, codeLanguage: this.codeLanguage, yearStart: this.yearStart, yearEnd: this.yearEnd})

    this.sendParams.emit({keyword: this.keyword, codeLanguage: this.codeLanguage, yearStart: this.yearStart, yearEnd: this.yearEnd})
  }

}
