import { Component } from '@angular/core';
import { GutendexService } from '../../services/gutendex.service';
import { Result } from '../../interfaces/result.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

bookDetail: Result | undefined;

id: number;

constructor(private apiService: GutendexService, private router: ActivatedRoute){

this.id = this.router.snapshot.params['id']

this.apiService.getDataById(this.id).subscribe(data => {this.bookDetail = data; console.log(this.bookDetail)});
}

}


// TIENES QUE MIRAR SI ESTE COMPONENTE DEBERÍA SER CHILDREN DE BROWSER EN EL ROUTER. O SI SU RUTA DEBERÍA INCLUIR BROWSER/BOOK
