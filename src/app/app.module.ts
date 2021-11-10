import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentsComponent } from './header-components/header-components/header-components.component';
import { FootComponentsComponent } from './foot-components/foot-components/foot-components.component';
import { MenuAndSliderComponent } from './main-components/menu-and-slider/menu-and-slider.component';
import { MainSectionComponent } from './main-components/main-section/main-section.component';
import { ItemsListComponent } from './main-components/main-section/items-list/items-list.component';
import { ColorPickerComponent } from './main-components/main-section/color-picker/color-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentsComponent,
    FootComponentsComponent,
    MenuAndSliderComponent,
    MainSectionComponent,
    ItemsListComponent,
    ColorPickerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
