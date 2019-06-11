import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NgForCmpComponent } from './ng-for-cmp/ng-for-cmp.component';
import { NgIfCmpComponent } from './ng-if-cmp/ng-if-cmp.component';
import { NgSwitchCmpComponent } from './ng-switch-cmp/ng-switch-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    NgForCmpComponent,
    NgIfCmpComponent,
    NgSwitchCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
