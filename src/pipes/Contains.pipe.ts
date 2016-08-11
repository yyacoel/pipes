import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'contains'
})

    export class Contains implements PipeTransform {
    transform(values:string[], filter:string):any[] {
        let ret = [];
        values.forEach(value => value.indexOf(filter) > -1 ? ret.push(value) : null);
        return ret;
    }
}
