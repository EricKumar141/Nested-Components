import { Component, OnInit } from '@angular/core';
import { Menu } from '../Interfaces/menu';
import { MenuService } from '../Services/menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public nestedMenus: Menu[];
  constructor(public menuData: MenuService) {}
  ngOnInit() {
    this.nestedMenus = this.menuData.menus;
    console.log(this.nestedMenus);
  }
}
