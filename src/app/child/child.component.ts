import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../Interfaces/menu';
import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() menu: Menu;
  constructor() {}

  ngOnInit() {}
}
