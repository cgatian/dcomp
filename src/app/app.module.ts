import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { RouterModule, ROUTES } from '@angular/router';


import { AppComponent } from './app.component';
import { DynamicModule } from './dynamic/dynamic.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicModule,
    RouterModule.forRoot([
    ]),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
