import { Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { BehaviorSubject, EMPTY } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { CourseAuthors } from 'src/app/core/models';
import { CustomAuthorsInputService } from 'src/app/core/services/custom-authors-input';

@Component({
  selector: 'app-authors-input',
  templateUrl: './custom-authors-input.component.html',
  styleUrls: ['./custom-authors-input.less'],
  providers: [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomAuthorsInputComponent),
    multi: true,
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CustomAuthorsInputComponent),
    multi: true,
  }],
  encapsulation: ViewEncapsulation.None
})

export class CustomAuthorsInputComponent implements ControlValueAccessor, Validator {
  @Input() public formControl: FormControl;
  public searchInputValueSubject: BehaviorSubject<string> = new BehaviorSubject('');
  public searchInputValue: string = '';
  public authorsSearchResult: CourseAuthors;
  public authorsTagCloudSet: Set<string> = new Set();

  public onChange: (_: string[]) => void;
  public onTouched: () => void;

  constructor (
    private addCoursePageService: CustomAuthorsInputService
  ) { }

  public ngOnInit(): void {
    this.searchInputValueSubject
      .pipe(
        debounceTime(200),
        mergeMap(result => {
          if (result) {
            return this.addCoursePageService.searchAuthors(result);
          }
          this.authorsSearchResult = undefined;
          return EMPTY;
        })
      )
      .subscribe(data => {
        this.authorsSearchResult = data;
      });

    this.formControl.valueChanges
      .subscribe(data => {
        const authorsTagsCloud: Set<string> = new Set(data);
        this.authorsTagCloudSet = authorsTagsCloud;
        this.formControl.updateValueAndValidity({ emitEvent: false });
    });
  }

  public ngOnDestroy(): void {
    this.searchInputValueSubject.unsubscribe();
  }

  public changeInputValue(): void {
    this.searchInputValueSubject.next(this.searchInputValue);
  }

  public setAuthorInTagsCloud(authorId: string): void {
    this.addCoursePageService.getAuthors(authorId).subscribe(
      data => {
        let authorsArr: string[];

        this.authorsTagCloudSet.add(data.name);
        authorsArr = [...this.authorsTagCloudSet];

        this.authorsSearchResult = undefined;
        this.searchInputValue = '';
        this.onChange(authorsArr);

        this.formControl.setValue(authorsArr);
        this.formControl.markAsTouched();
      }
    );
  }

  public deleteAuthorFromTagsCloud(item: string): void {
    this.authorsTagCloudSet.delete(item);
    this.formControl.setValue([...this.authorsTagCloudSet]);
  }

  public writeValue(_: string[]): void {
    return undefined;
  }

  public registerOnChange(fn: (_: string[]) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    const isValid: boolean = this.authorsTagCloudSet.size !== 0;
    if (!isValid) {
      return  { requiredError: true };
    }
  }
}
