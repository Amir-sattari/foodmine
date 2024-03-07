import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchTerm = '';

  constructor (rout: ActivatedRoute,private router: Router)
  {
    rout.params.subscribe((params) => {
      if(params.searchTerm)
        this.searchTerm = params.searchTerm;
    })
  }

  searchMethod(term: string): void
  {
    if(term)
      this.router.navigateByUrl('/search/' + term);
  }
}
