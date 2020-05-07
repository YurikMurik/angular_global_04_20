import { Component } from '@angular/core';
import { IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons';
import { HomePageService } from '../../home-page.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  public faSearchIcon: IconDefinition = faSearch;
  public searchResult: string = '';

  constructor (private homePageService: HomePageService) {}

  public searchCourses(): void {
    this.homePageService.sendMessageSortByName();
    console.log(this.searchResult);
  }
}
