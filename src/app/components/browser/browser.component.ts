import { Component } from '@angular/core';
import { GutendexService } from '../../services/gutendex.service';
import { Book, Result } from '../../interfaces/result.interface';
import { UrlParams } from '../../models/urlParams';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent {

  page:number = 1;
  url:string = '';
  result: Result | any;
  arrayList: Book[] = [];
  bookDetail: Result | undefined;

  constructor(private apiService: GutendexService){
    this.apiService.getDataByPage(this.url, this.page).subscribe(data => {this.result = data; this.arrayList = this.result.results});
  }

  fNext(){
    this.page++;
    this.apiService.getDataByPage(this.url, this.page).subscribe(data => {this.result = data; this.arrayList = this.result.results});
  }

  fPrevious(){
    this.page--;
    this.apiService.getDataByPage(this.url, this.page).subscribe(data => {this.result = data; this.arrayList = this.result.results});
  }

  fBuildUrl(params: UrlParams){
    this.url = '';
    if (params.keyword.length > 0){
      this.url = this.url.concat('search=' + params.keyword.split(' ').join('%20'))
    }
    if (params.keyword.length > 0 && params.codeLanguage.length > 0){
      this.url = this.url.concat('&')
    }
    if (params.codeLanguage.length > 0) {
      this.url = this.url.concat('languages=' + params.codeLanguage)
    }
    this.url = this.url.concat('&author_year_start=' + params.yearStart + '&author_year_end=' + params.yearEnd)

    console.log(this.url)

    this.apiService.getDataByPage(this.url, this.page).subscribe(data => {this.result = data; this.arrayList = this.result.results})
  }

}

// fIdNum(num: number){
//   this.apiService.getDataById(num).subscribe(data => {this.bookDetail = data; console.log(this.bookDetail)});
//     }
