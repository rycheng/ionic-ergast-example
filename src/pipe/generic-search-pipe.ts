import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : 'searchFilter',
})
export class GenericSearchPipe implements PipeTransform {
  public transform(value: any[], key: string, term: string) {
    return value.filter((item) => {
      return this.match(item, key, term);
    });
  }

  private match(item: any, key: string, term: string): boolean {
    if (key) {
      let included: boolean = false;

      key.split(',').forEach(value => {
        if (item.hasOwnProperty(value)) {
          if (term) {
            let regExp = new RegExp('\\b' + term, 'gi');
            if(regExp.test(item[value])) {
              included = true;
            }
          } else {
            included = true;
          }
        }
      });
      return included;
    }
    return false;
  }
}