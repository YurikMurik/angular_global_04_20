import { Component, OnInit } from '@angular/core';
import { IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons';
import { HomePageService } from '../../../core/services/home-page.service';
import { UpdateCoursesMessageService } from 'src/app/core/services/update-courses.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/internal/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  public faSearchIcon: IconDefinition = faSearch;
  public searchInput: string = '';
  public searchInputChange: Subject<string> = new Subject();

  constructor (
    private homePageService: HomePageService,
    private updateCoursesMessage: UpdateCoursesMessageService
  ) { }

  public ngOnInit(): void {
    this.searchInputChange
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(result => {
        this.searchInput = result;
        this.getDataFromApi();
      });
  }

  public ngOnDestroy(): void {
    this.searchInputChange.unsubscribe();
  }

  public getDataFromApi(): void {
    if (this.searchInput.length === 0 || this.searchInput.length >= 3) {
      this.homePageService.searchCourse(this.searchInput).subscribe(
        data => this.updateCoursesMessage.updateCourse(data)
      );
    }
  }

  public onTextChange(query: string): void {
    this.searchInputChange.next(query);
  }
}
