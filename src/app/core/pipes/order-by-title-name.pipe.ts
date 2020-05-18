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

        return array.sort((currentElem: CourseItemInfo, nextElem: CourseItemInfo) => {
            if (currentElem.title < nextElem.title) {
                return -1;
            }

            if (currentElem.title > nextElem.title) {
                return 1;
            }
            return 0;
        });
    }
}
