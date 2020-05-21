import { Component } from '@angular/core';
import { IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons';
import { HomePageService } from '../../../core/services/home-page.service';
import { UpdateCoursesMessageService } from 'src/app/core/services/update-courses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  public faSearchIcon: IconDefinition = faSearch;
  public searchResult: string = '';

  constructor (
    private homePageService: HomePageService,
    private updateCoursesMessage: UpdateCoursesMessageService
  ) { }

  public searchCourses(): void {
    this.homePageService.searchCourse(this.searchResult).subscribe(
      data => this.updateCoursesMessage.updateCourse(data)
    );
  }
}
