import { Pipe, PipeTransform } from "@angular/core";

export enum Parameters{
  upper = 'upper',
  lower = 'lower',
  title = 'title'
};

@Pipe({
  name: 'cardformat'
})
export class CardFormatPipe implements PipeTransform{
  transform(value: string):string {
    if(value.length !== 16 || Number.isNaN(+value)){
      return value;
    }
    return '****' + value.slice(12);
  }
}


@Pipe({
  name: 'convertcase'
})

export class ConvertCasePipe implements PipeTransform{
  transform(value: string, typeStr: string): string {
    if(!(<any>Object).values(Parameters).includes(typeStr)){
      return value;
    }
    if(typeStr === 'upper'){
      return value.toUpperCase();
    }
    if(typeStr === 'lower'){
      return value.toLowerCase();
    }
    value = value.split(' ')
    .map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase())
    .join(' ');
    return value;
  }
}
