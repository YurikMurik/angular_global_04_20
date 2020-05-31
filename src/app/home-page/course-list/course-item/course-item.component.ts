import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IconDefinition, faEdit, faTrash, faClock, faCalendar, faStar } from '@fortawesome/free-solid-svg-icons';
import { CourseItemInfo } from 'src/app/core/models';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { HomePageService } from 'src/app/core/services/home-page.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.less']
})
export class CourseItemComponent implements OnInit {
  @Input() public item: CourseItemInfo;
  @Input() public routerLink: Router;
  @Output() public onDeleteCourse: EventEmitter<string> = new EventEmitter();

  public courseAuthors: string;

  public editButtonIcon: IconDefinition = faEdit;
  public trashButtonIcon: IconDefinition = faTrash;
  public clockButtonIcon: IconDefinition = faClock;
  public calendarButtonIcon: IconDefinition = faCalendar;
  public topRatedIcon: IconDefinition = faStar;

  constructor(
    public matDialog: MatDialog,
    public homePageService: HomePageService,
    public router: Router
  ) { }

  public ngOnInit(): void {
    this.courseAuthors = Array.from(this.item.authors).join(', ');
  }

  public onDeleteCourseEmit(id: string, title: string): void {
    this.openDialog(id, title);
  }

  public isEditedCourse(id: string): void {
    this.router.navigate(['/courses', id]);
  }

  public openDialog(id: string, title: string): void {
    const dialogRef: MatDialogRef<object> = this.matDialog.open(ConfirmationDialogComponent, {
      width: '400px',
      height: '150px',
      id: 'modal-component',
      disableClose: true,
      data: `Do you confirm the deletion "${title}?"`
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        return this.onDeleteCourse.emit(id);
      }
    });
  }
}
