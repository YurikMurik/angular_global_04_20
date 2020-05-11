import { Pipe, PipeTransform } from '@angular/core';
import { CourseItemInfo } from '../models';
/*
 * Sort the array asceding by title name
 * Usage:
 * array | orderByTitleName
 *
 * Result:
 * Return sorted array by title name
*/

@Pipe({name: 'orderByTitleName'})

export class OrderByTitleNamePipe implements PipeTransform {
    public transform(array: CourseItemInfo[]): CourseItemInfo[] {
        if (!Array.isArray(array)) {
            return;
        }
        return array.sort((one, two) => {
            return one.title < two.title ? -1 : 1;
        });
    }
}
