import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ChildComponent } from './child/child.component';
import { MenuService } from './Services/menu.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MenuComponent, ChildComponent],
  bootstrap: [AppComponent],
  providers: [MenuService],
})
export class AppModule {}
