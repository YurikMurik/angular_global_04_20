import { Component } from '@angular/core';
import { IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  public faSearchIcon: IconDefinition = faSearch;
  public searchResult: string = '';

  public searchCourses(): void {
    console.log(this.searchResult);
  }
}
