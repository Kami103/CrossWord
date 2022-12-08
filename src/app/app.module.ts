import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrossWordGeneratorComponent } from './app/cross-word-generator/cross-word-generator.component';

@NgModule({
  declarations: [AppComponent, CrossWordGeneratorComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
