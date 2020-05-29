import { Component, OnInit } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, mergeMap } from 'rxjs/internal/operators';
import { UpdateCoursesMessageService } from 'src/app/core/services/update-courses.service';
import { HomePageService } from '../../core/services/home-page.service';

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
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        filter(elem => this.elemLengthFiter(elem)),
        mergeMap(result => this.homePageService.searchCourse(result))
      )
      .subscribe(data => this.updateCoursesMessage.updateCourse(data));
  }

  public elemLengthFiter(elem: string): boolean {
    return elem.length === 0 || elem.length > 3;
  }

  public onTextChange(query: string): void {
    this.searchInputChange.next(query);
  }

  public ngOnDestroy(): void {
    this.searchInputChange.unsubscribe();
  }

}
