import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { MovieapiserviceService } from 'src/app/service/movieapiservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent {

  searchResult: any

  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  constructor(private service: MovieapiserviceService) { }



  submitForm() {
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => this.searchResult = result.results)
  }
}

