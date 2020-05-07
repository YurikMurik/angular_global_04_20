import { Pipe, PipeTransform } from '@angular/core';
import { CourseItemInfo } from '../models';
/*
 * Sort the array asceding by creational date
 * Usage:
 *  array | orderByDateCreation
 * Example:
 *   {{ arrayData | orderByDateCreation }}
 *   sort asceding by creational date
*/

@Pipe({name: 'orderByDateCreation'})

export class OrderByDateCreationPipe implements PipeTransform {
    public transform(array: CourseItemInfo[]): CourseItemInfo[] {
        if (!Array.isArray(array)) {
            return;
        }
        return array.sort((firstElem, secondElem) => {
            const firstElemDateMs: number = new Date(firstElem.createdAtDate).getTime();
            const secondElemDateMs: number = new Date(secondElem.createdAtDate).getTime();
            return firstElemDateMs - secondElemDateMs;
        });
  }
}
