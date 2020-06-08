import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
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
  public searchInputFormControl: FormControl;

  constructor (
    private homePageService: HomePageService,
    private updateCoursesMessage: UpdateCoursesMessageService,
  ) {
    this.searchInputFormControl = new FormControl('');
  }

  public ngOnInit(): void {
    this.searchInputFormControl.valueChanges
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
}
