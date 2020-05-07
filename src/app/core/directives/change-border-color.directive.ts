import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

const DAYS_IN_MILLISEC: number = 1.21e+9;
const GREEN_COLOR: string = '#90EE90';
const BLUE_COLOR: string = '#87CEFA';

@Directive({
  selector: '[appChangeBorderColor]'
})

export class ChangeBorderColorDirective implements OnInit {
    @Input() private createdAtDate: string;
    constructor(private el: ElementRef, public datepipe: DatePipe) { }

    public ngOnInit(): void {
        this.setColor(this.createdAtDate);
    }

    public setColor(creationDate: string): void {
        const currentDate: Date = new Date();
        const createdAtDateTransform: Date = new Date(creationDate);
        const dateDiff: boolean = currentDate.getTime() - createdAtDateTransform.getTime() > DAYS_IN_MILLISEC;

        if (createdAtDateTransform < currentDate && dateDiff) {
            this.el.nativeElement.style.borderColor = GREEN_COLOR;
        }

        if (createdAtDateTransform > currentDate) {
            this.el.nativeElement.style.borderColor = BLUE_COLOR;
        }
    }
}
