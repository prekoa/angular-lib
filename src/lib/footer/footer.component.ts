import { Component, Input } from '@angular/core';

@Component({
  selector: 'teszt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
  @Input() link: string;

  constructor() { }
}
