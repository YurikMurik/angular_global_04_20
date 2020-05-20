import { Pipe, PipeTransform } from '@angular/core';
/*
 * Sort the array asceding by creational date
 * Usage:
 *  array | orderByDateCreation
 * Example:
 *   {{ arrayData | orderByDateCreation }}
 *   sort asceding by creational date
*/

@Pipe({name: 'createBreadcrumbString'})

export class CreateBreadcrumbStringPipe implements PipeTransform {
  public transform(routerUrl: string): string {
    const breadcrumbArray: Array<string> = routerUrl && routerUrl.split('/').splice(1);
    const newBreadcrumbArray: string = breadcrumbArray &&
      breadcrumbArray.map(e => e[0].toUpperCase() + e.slice(1)).join(' / ');
    return newBreadcrumbArray;
  }
}
