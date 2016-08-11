import {Component} from "@angular/core";
import {ReversePipe} from "../pipes/reverse.pipe";

@Component({
  selector: 'examples',
  pipes: [ReversePipe],
  template: `   
   <h1>{{ names | reverse }}</h1>   
   `,
})

export class Examples {

  private names:string[];

  constructor() {
    this.names = ['nir','ran','chen','shmuela'];
  }
}
