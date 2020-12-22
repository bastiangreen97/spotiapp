import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})
export class TargetsComponent{
  @Input() items: any[] = [];
  constructor() { }

}
