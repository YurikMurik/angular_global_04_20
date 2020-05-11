import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DatePipe } from '@angular/common';

const DAYS_IN_MILLISEC: number = 1.21e+9;

@Directive({
  selector: '[appChangeBorderColor]'
})

export class ChangeBorderColorDirective implements OnInit {
    @Input() private createdAtDate: string;
    constructor (
        private el: ElementRef,
        private renderer: Renderer2,
        public datepipe: DatePipe) { }

    public ngOnInit(): void {
        this.setColor(this.createdAtDate);
    }

    public setColor(creationDate: string): void {
        const currentDate: Date = new Date();
        const createdAtDateTransform: Date = new Date(creationDate);
        const dateDiff: boolean = currentDate.getTime() - createdAtDateTransform.getTime() > DAYS_IN_MILLISEC;

        if (createdAtDateTransform < currentDate && dateDiff) {
            this.renderer.addClass(this.el.nativeElement, 'border--color-green');
        }

        if (createdAtDateTransform > currentDate) {
            this.renderer.addClass(this.el.nativeElement, 'border--color-blue');
        }
    }
}
